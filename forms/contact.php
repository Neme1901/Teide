<?php
/* Iba a usar una biblioteca del bootstrap para el formulario de contacto
* pero era de pago asi que no he podido utilizarla, y realice este yo por mi cuenta
*/
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo 'Direccion de correo invalida.';
	exit;
}


$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";


if (mail('your_email@example.com', $subject, $message, $headers)) {
	echo 'El mensaje ha sido enviado. Gracias!';
} else {
	echo 'Error enviando el mensaje';
}
