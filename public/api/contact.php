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

// Helper to get env vars
function get_env_var($key) {
    $val = getenv($key);
    if ($val === false) {
        // Try to load from a local config if exists (for non-env setups)
        if (file_exists(__DIR__ . '/env.php')) {
            $config = include __DIR__ . '/env.php';
            return isset($config[$key]) ? $config[$key] : null;
        }
    }
    return $val;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit;
}

// Honeypot
if (!empty($input['fax'])) {
    echo json_encode(['success' => true, 'token' => 'fake-token']);
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

// Prepare Email Content
$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

$html = "
<h2>New Contact Message</h2>
<p><strong>Name:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Phone:</strong> $phone</p>
<p><strong>Message:</strong><br>$message</p>
";

// Send via Resend API
$ch = curl_init('https://api.resend.com/emails');
$payload = json_encode([
    'from' => $fromEmail,
    'to' => $ownerEmail,
    'reply_to' => $email,
    'subject' => "📩 New Contact Message: $name",
    'html' => $html
]);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resendApiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    $token = base64_encode(time() . '-' . rand());
    // Set cookie if possible (might not work well with simple fetch, but we return token)
    setcookie('booking_session', $token, time() + 3600, "/", "", true, true);
    
    echo json_encode(['success' => true, 'message' => 'Message sent', 'token' => $token]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email', 'debug' => $response]);
}
?>
