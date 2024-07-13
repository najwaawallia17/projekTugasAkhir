<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Simulate form processing
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Subject: $subject<br>";
    echo "Message: $message<br>";
}
?>
