<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");



$response = array();
$upload_dir = 'uploads/';
$server_url = 'http://127.0.0.1:8000';

if (isset($_POST['submit'])) {
    
$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

// $mailTo = "contact@nuethic.com";
$mailTo = "trentwhimpey@yahoo.com";
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
// header("Location: index.php?mailsend");


} 

?>


 


