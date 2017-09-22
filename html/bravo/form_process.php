<?php
	if($_SERVER['REQUEST_METHOD']=="POST") {
		$email = $_POST['email'];
		$message = $_POST['message'];
        $to = 'katie_acting@live.ca';
        $subject = 'Bravo Coffee Customer Inquiry';

        $mail = mail ($to, $subject, $message, "From: ". $email);
        if ($mail){
        echo "<h1>Your mail has been sent successfully! <a href="index.html">Go back?</a></h1>";
        }else{
        echo "Your mail failed to send!";
        };
       }
?>