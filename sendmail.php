<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $firstName = $_POST['FirstName'];
    $lastName = $_POST['LastName'];
    $email = $_POST['Email'];
    $phoneNumber = $_POST['PhoneNumber'];

    // Compose email message
    $to = 'nirmalkumar.s@nuageedtech.com';
    $subject = 'New Form Submission';
    $message = "First Name: $firstName\n" .
               "Last Name: $lastName\n" .
               "Email: $email\n" .
               "Phone Number: $phoneNumber\n";

    // Send email
    $headers = 'From: your_email@example.com' . "\r\n" .
               'Reply-To: your_email@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Message sent successfully.';
    } else {
        echo 'Failed to send message. Please try again.';
    }
} else {
    echo 'Invalid request.';
}
?>
