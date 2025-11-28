<?php
// public/api/contact.php

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
    ";
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit;
}

if (!empty($input['_hp_fax'])) {
    // Log honeypot trigger
    $logFile = __DIR__ . '/email_debug.log';
    $timestamp = date('Y-m-d H:i:s');
    error_log("[$timestamp] HONEYPOT TRIGGERED (Contact). IP: " . $_SERVER['REMOTE_ADDR'] . PHP_EOL, 3, $logFile);

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
$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

// --- 1. OWNER EMAIL TEMPLATE ---
$ownerHtml = "
<html>
<head><style>" . get_email_style() . "</style></head>
<body>
    <div class='container'>
        <div class='header'>
            <a href='https://ez2fixllc.com' class='logo'>Ez2Fix Contact</a>
        </div>
        <div class='h1'>New Contact Message</div>
        <div class='highlight'>
            <div class='info-row'><span class='label'>Name:</span> <span class='value'>$name</span></div>
            <div class='info-row'><span class='label'>Phone:</span> <span class='value'><a href='tel:$phone'>$phone</a></span></div>
            <div class='info-row'><span class='label'>Email:</span> <span class='value'>$email</span></div>
        </div>
        
        <div class='h2'>Message</div>
        <div class='value' style='white-space: pre-wrap;'>$message</div>
        
        <div class='footer'>
            Sent from Ez2Fix Website Contact Form
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
        <p>We have received your message. Our team will get back to you shortly.</p>
        
        <div class='highlight'>
            <div class='h2' style='margin-top:0'>Your Message</div>
            <p>\"$message\"</p>
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
    $logFile = __DIR__ . '/email_debug.log';
    $timestamp = date('Y-m-d H:i:s');
    
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
    
    error_log("[$timestamp] cURL Request to Resend API" . PHP_EOL, 3, $logFile);
    error_log("[$timestamp] Payload: " . $jsonPayload . PHP_EOL, 3, $logFile);

    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonPayload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // DEBUG ONLY
    // curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // DEBUG ONLY

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    $curlErrno = curl_errno($ch);
    curl_close($ch);
    
    if ($curlErrno !== 0) {
        error_log("[$timestamp] cURL Error #$curlErrno: $curlError" . PHP_EOL, 3, $logFile);
    }
    
    error_log("[$timestamp] HTTP Code: $httpCode" . PHP_EOL, 3, $logFile);
    error_log("[$timestamp] Response: $response" . PHP_EOL, 3, $logFile);

    return ['code' => $httpCode, 'response' => $response, 'curl_error' => $curlError];
}

// --- SEND EMAILS ---

//        // Send emails
        $logFile = __DIR__ . '/email_debug.log';
        $timestamp = date('Y-m-d H:i:s');
        
        error_log("[$timestamp] === CONTACT FORM SUBMISSION ===" . PHP_EOL, 3, $logFile);
        error_log("[$timestamp] API Key present: " . (!empty($resendApiKey) ? 'YES' : 'NO') . PHP_EOL, 3, $logFile);
        error_log("[$timestamp] Owner Email: $ownerEmail" . PHP_EOL, 3, $logFile);
        error_log("[$timestamp] From Email: $fromEmail" . PHP_EOL, 3, $logFile);
        
        $ownerResult = send_resend_email(
            $resendApiKey,
            $fromEmail,
            $ownerEmail,
            "📩 New Contact Message: {$name}",
            $ownerHtml,
            $email
        );
        
        error_log("[$timestamp] Owner Email Result - Code: {$ownerResult['code']}" . PHP_EOL, 3, $logFile);
        error_log("[$timestamp] Owner Response: " . json_encode($ownerResult['response']) . PHP_EOL, 3, $logFile);

        // Send client auto-responder
        $clientResult = ['code' => 0, 'response' => 'Skipped'];
        if (!empty($email)) {
            $clientResult = send_resend_email(
                $resendApiKey,
                $fromEmail,
                $email,
                "✅ We received your message - Ez2Fix",
                $clientHtml
            );
            
            error_log("[$timestamp] Client Email Result - Code: {$clientResult['code']}" . PHP_EOL, 3, $logFile);
            error_log("[$timestamp] Client Response: " . json_encode($clientResult['response']) . PHP_EOL, 3, $logFile);
        }

        // Check success
        if ($ownerResult['code'] >= 200 && $ownerResult['code'] < 300) {
    // Set a short-lived, secure, httponly cookie as a "ticket" to the thank-you page.
    $token = bin2hex(random_bytes(16)); // More secure token
    setcookie('form_success_token', $token, [
        'expires' => time() + 60, // Expires in 60 seconds
        'path' => '/',
        'domain' => '', // Leave empty for current host
        'secure' => true,
        'httponly' => false,
        'samesite' => 'Lax'
    ]);
    
    // Return JSON success with redirect URL
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully',
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
