<?php
// public/api/booking.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

function get_env_var($key) {
    $val = getenv($key);
    if ($val === false) {
        if (file_exists(__DIR__ . '/env.php')) {
            $config = include __DIR__ . '/env.php';
            return isset($config[$key]) ? $config[$key] : null;
        }
    }
    return $val;
}

// Helper for Email Styling
function get_email_style() {
    return "
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f6f9fc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; margin-top: 20px; margin-bottom: 20px; }
        .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea; margin-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #1f2937; text-decoration: none; }
        .h1 { color: #1f2937; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .h2 { color: #1f2937; font-size: 20px; font-weight: bold; margin-top: 30px; margin-bottom: 15px; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; color: #1f2937; }
        .value { color: #4b5563; }
        .button { display: inline-block; background-color: #f59e0b; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
        .footer { text-align: center; font-size: 12px; color: #9ca3af; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; }
        .highlight { background-color: #fffbeb; padding: 15px; border-radius: 6px; border: 1px solid #fcd34d; }
        .tracking-info { font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 10px; border-radius: 4px; margin-top: 20px; }
    ";
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit;
}

if (!empty($input['fax'])) {
    // This is a honeypot field. Silently exit without doing anything.
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Submission received.']);
    exit;
}

$resendApiKey = get_env_var('RESEND_API_KEY');
$recaptchaSecret = get_env_var('RECAPTCHA_SECRET_KEY');
$ownerEmail = get_env_var('RESEND_OWNER_EMAIL');
$fromEmail = get_env_var('RESEND_FROM_EMAIL');

if (!$resendApiKey || !$recaptchaSecret) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration error: Missing API keys']);
    exit;
}

// Verify reCAPTCHA
if (!empty($input['recaptchaToken'])) {
    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $recaptchaSecret,
        'response' => $input['recaptchaToken']
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context = stream_context_create($options);
    $result = file_get_contents($verifyUrl, false, $context);
    $jsonResult = json_decode($result, true);
    
    if (!$jsonResult['success'] || $jsonResult['score'] < 0.5) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'reCAPTCHA validation failed']);
        exit;
    }
}

// Data Preparation
$service = htmlspecialchars($input['service'] ?? '');
$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$address = htmlspecialchars($input['addressFull'] ?? '');
$comments = htmlspecialchars($input['comments'] ?? '');
$utmSource = htmlspecialchars($input['utmSource'] ?? 'Direct');
$utmMedium = htmlspecialchars($input['utmMedium'] ?? '-');
$utmCampaign = htmlspecialchars($input['utmCampaign'] ?? '-');

// --- 1. OWNER EMAIL TEMPLATE ---
$ownerHtml = "
<html>
<head><style>" . get_email_style() . "</style></head>
<body>
    <div class='container'>
        <div class='header'>
            <a href='https://ez2fixllc.com' class='logo'>Ez2Fix Booking</a>
        </div>
        <div class='h1'>New Service Request</div>
        <div class='highlight'>
            <div class='info-row'><span class='label'>Service:</span> <span class='value'>$service</span></div>
            <div class='info-row'><span class='label'>Customer:</span> <span class='value'>$name</span></div>
            <div class='info-row'><span class='label'>Phone:</span> <span class='value'><a href='tel:$phone'>$phone</a></span></div>
        </div>
        
        <div class='h2'>Details</div>
        <div class='info-row'><span class='label'>Email:</span> <span class='value'>$email</span></div>
        <div class='info-row'><span class='label'>Address:</span> <span class='value'>$address</span></div>
        <div class='info-row'><span class='label'>Comments:</span> <br><span class='value'>$comments</span></div>

        <div class='tracking-info'>
            <strong>Marketing Source:</strong><br>
            Source: $utmSource | Medium: $utmMedium | Campaign: $utmCampaign
        </div>
        
        <div class='footer'>
            Sent from Ez2Fix Website Booking System
        </div>
    </div>
</body>
</html>";

// --- 2. CLIENT AUTO-RESPONDER TEMPLATE ---
$clientHtml = "
<html>
<head><style>" . get_email_style() . "</style></head>
<body>
    <div class='container'>
        <div class='header'>
            <a href='https://ez2fixllc.com' class='logo'>Ez2Fix Garage Door Service</a>
        </div>
        <div class='h1'>Thank You, $name!</div>
        <p>We have received your request for <strong>$service</strong>. Our team is reviewing it right now.</p>
        
        <div class='highlight'>
            <div class='h2' style='margin-top:0'>What Happens Next?</div>
            <p>1. <strong>We Review:</strong> A technician will check your details.</p>
            <p>2. <strong>We Contact You:</strong> We'll call or text you at <strong>$phone</strong> shortly to confirm.</p>
            <p>3. <strong>We Fix It:</strong> Our licensed pro will arrive to solve your problem.</p>
        </div>

        <div style='text-align: center; margin-top: 30px;'>
            <div class='h2'>Need Immediate Help?</div>
            <p>Call our 24/7 Emergency Line:</p>
            <a href='tel:2015546769' class='button'>Call (201) 554-6769</a>
        </div>
        
        <div class='footer'>
            Ez2Fix Garage Door Service | NJ License #13VH13553300<br>
            Professional Repair & Installation
        </div>
    </div>
</body>
</html>";

// Function to send email via Resend
function send_resend_email($apiKey, $from, $to, $subject, $html, $replyTo = null) {
    $ch = curl_init('https://api.resend.com/emails');
    $payload = [
        'from' => $from,
        'to' => is_array($to) ? $to : array_map('trim', explode(',', $to)),
        'subject' => $subject,
        'html' => $html
    ];
    
    if ($replyTo) {
        $payload['reply_to'] = $replyTo;
    }

    $jsonPayload = json_encode($payload);

    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonPayload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return ['code' => $httpCode, 'response' => $response];
}

// --- SEND EMAILS ---

// 1. Send to Owners
$ownerResult = send_resend_email(
    $resendApiKey, 
    $fromEmail, 
    $ownerEmail, 
    "📅 New Booking: $service - $name", 
    $ownerHtml, 
    $email
);

// 2. Send to Client (Auto-responder)
$clientResult = ['code' => 0, 'response' => 'Skipped'];
if (!empty($email)) {
    $clientResult = send_resend_email(
        $resendApiKey, 
        $fromEmail, 
        $email, 
        "✅ We received your request - Ez2Fix", 
        $clientHtml
    );
}

// Check Success (based on Owner email)
if ($ownerResult['code'] >= 200 && $ownerResult['code'] < 300) {
    // Set a short-lived, secure, httponly cookie as a "ticket" to the thank-you page.
    $token = bin2hex(random_bytes(16)); // More secure token
    setcookie('form_success_token', $token, [
        'expires' => time() + 60, // Expires in 60 seconds
        'path' => '/',
        'domain' => '', // Leave empty for current host
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]);
    
    // Return JSON success with redirect URL
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Booking received successfully',
        'redirectUrl' => '/thank-you'
    ]);
    exit;
} else {
    http_response_code(500);
    error_log("Resend API Error (Owner): " . $ownerResult['response']);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send email. Please try again later.', 
        'debug_owner' => $ownerResult['response'],
        'debug_client' => $clientResult['response']
    ]);
}
?>
