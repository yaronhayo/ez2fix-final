<?php
// Quick diagnostic test
header('Content-Type: application/json');

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

$resendApiKey = get_env_var('RESEND_API_KEY');
$recaptchaSecret = get_env_var('RECAPTCHA_SECRET_KEY');
$ownerEmail = get_env_var('RESEND_OWNER_EMAIL');
$fromEmail = get_env_var('RESEND_FROM_EMAIL');

$envPath = __DIR__ . '/env.php';
$dirContents = scandir(__DIR__);

echo json_encode([
    'resend_key_set' => !empty($resendApiKey),
    'recaptcha_set' => !empty($recaptchaSecret),
    'owner_email_set' => !empty($ownerEmail),
    'from_email_set' => !empty($fromEmail),
    'resend_key_length' => strlen($resendApiKey ?? ''),
    'env_file_exists' => file_exists($envPath),
    'env_path_checked' => $envPath,
    'current_dir' => __DIR__,
    'files_in_dir' => $dirContents,
    'resend_key_preview' => substr($resendApiKey ?? '', 0, 10) . '...'
]);
?>
