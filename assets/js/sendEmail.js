function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name" : contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    
    return false; //This is to block a new page from loading if incorrect. Works well for github pages.
}

