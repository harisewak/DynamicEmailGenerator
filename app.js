function generateEmail() {
    // Get user input
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Generate the dynamic text
    const generatedText = `Hello ${name},\n\n${message}\n\nBest regards,\nYour Name`;
    
    // Display the generated text on the page
    document.getElementById('generatedText').innerText = generatedText;

    // Encode the subject and body for the email link
    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(generatedText);

    // Create the mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${mailSubject}&body=${mailBody}`;

    // Set the mailto link on the Send Email button
    const sendEmailLink = document.getElementById('sendEmailLink');
    sendEmailLink.href = mailtoLink;
    sendEmailLink.innerText = "Send Email";
}
