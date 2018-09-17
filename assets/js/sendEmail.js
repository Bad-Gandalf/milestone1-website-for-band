function sendMail(contactForm) {
    emailjs.sendForm("gmail", "rosie", '#contactForm')
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        
}

