function generateEmail() {
    // Get user input
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;
    const hobbies = document.getElementById('hobbies').value;
    const gender = document.getElementById('gender').value;
    const maritalStatus = document.getElementById('maritalStatus').value;

    // Generate the dynamic text
    const generatedText = `Dear ${name},\n\nThank you for sharing more about yourself. It's interesting to know that you are ${age} years old and work as a ${occupation}. It's great that you enjoy ${hobbies}. Being a ${gender.toLowerCase()} who is ${maritalStatus.toLowerCase()} certainly adds more perspective.\n\nBest regards,\nYour Name`;

    // Display the generated text
    document.getElementById('generatedText').innerText = generatedText;

    // Encode the subject and body for the email link
    const mailSubject = encodeURIComponent("Your Personalized Message");
    const mailBody = encodeURIComponent(generatedText);

    // Create the mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${mailSubject}&body=${mailBody}`;

    // Set the mailto link on the Send Email button
    const sendEmailLink = document.getElementById('sendEmailLink');
    sendEmailLink.href = mailtoLink;
    sendEmailLink.style.display = "inline-block";
    sendEmailLink.innerText = "Send Email";
}
