// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Handle Consultation Form Submission
    const consultationForm = document.getElementById('consultationForm');
    consultationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const city = document.getElementById('city').value;

        // Basic form validation
        if (!fullName || !email || !mobile || !city) {
            alert("Please fill all fields.");
            return;
        }

        // If all fields are filled, you can process the form here
        alert("Thank you for your submission! We will contact you soon.");
        consultationForm.reset(); // Reset the form fields after submission
    });

    // Handle smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove '#' from the id
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Smooth scrolling effect
                });
            }
        });
    });

    // Handle the Subscription Form
    const subscribeButton = document.querySelector('.subscribe-btn');
    subscribeButton.addEventListener('click', function (e) {
        e.preventDefault();

        const emailInput = document.querySelector('#subscription-email');
        const emailValue = emailInput.value;

        if (emailValue && validateEmail(emailValue)) {
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear the input after subscription
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Simple email validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

});
