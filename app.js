function generateEmail() {
    // Get user input
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const recipientName = document.getElementById('recipientName').value;
    const recipientEmail = document.getElementById('recipientEmail').value;
    const experience = document.getElementById('experience').value;
    const yourName = document.getElementById('yourName').value;

    // Generate the subject and email body
    const subject = `Apply for ${position} post`;
    const emailBody = `Dear ${recipientName},\n\nI am writing to express my interest in the ${position} position at ${company}. I have ${experience} years of experience in this field and believe I would be a valuable addition to your team.\n\nThank you for considering my application. I look forward to the opportunity to discuss how my experience and skills align with the needs of your team.\n\nBest regards,\n${yourName}`;

    // Display the generated email body
    document.getElementById('generatedText').innerText = emailBody;

    // Encode the subject and body for the email link
    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(emailBody);

    // Create the mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${mailSubject}&body=${mailBody}`;

    // Set the mailto link on the Send Email button
    const sendEmailLink = document.getElementById('sendEmailLink');
    sendEmailLink.href = mailtoLink;
    sendEmailLink.style.display = "inline-block";
    sendEmailLink.innerText = "Send Email";
}
