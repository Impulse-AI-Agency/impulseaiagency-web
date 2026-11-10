<?php
/**
 * Impulse AI Agency — formulario de contacto
 * Recibe el formulario de index.html y lo envía por correo.
 */

// === CONFIGURACIÓN ===
$TO_EMAIL   = 'carlos@impulseaiagency.com';   // Quién recibe los contactos
$FROM_EMAIL = 'web@impulseaiagency.com';      // Remitente técnico (debe ser de tu dominio)

header('Content-Type: application/json; charset=utf-8');

function respond($ok, $code = 200) {
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 405);
}

// Trampa anti-spam (campo oculto): si viene lleno, es un bot.
if (!empty($_POST['company_url'])) {
    respond(true);
}

function clean($key, $max = 500) {
    $v = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
    return mb_substr(strip_tags($v), 0, $max);
}

$name    = clean('name', 120);
$email   = filter_var(clean('email', 200), FILTER_VALIDATE_EMAIL);
$company = clean('company', 160);
$website = clean('website', 200);
$revenue = clean('revenue', 20);
$lang    = clean('lang', 2) === 'en' ? 'EN' : 'ES';
$message = isset($_POST['message']) ? mb_substr(strip_tags(trim((string) $_POST['message'])), 0, 3000) : '';
$consent = !empty($_POST['consent']);

if ($name === '' || !$email || $company === '' || $revenue === '' || !$consent) {
    respond(false, 422);
}

$subject = "Nuevo lead web [$lang]: $company";
$body  = "Nuevo contacto desde impulseaiagency.com\n\n";
$body .= "Nombre: $name\n";
$body .= "Correo: $email\n";
$body .= "Empresa: $company\n";
$body .= "Sitio web: $website\n";
$body .= "Facturación mensual: $revenue\n";
$body .= "Idioma: $lang\n\n";
$body .= "Mensaje:\n$message\n\n";
$body .= "Aceptó el aviso de privacidad: sí\n";
$body .= "Fecha: " . date('Y-m-d H:i:s') . "\n";

$headers  = "From: Impulse AI Web <$FROM_EMAIL>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, "-f$FROM_EMAIL");

respond((bool) $sent, $sent ? 200 : 500);
