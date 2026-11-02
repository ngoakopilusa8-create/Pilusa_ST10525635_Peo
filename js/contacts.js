// Select the contact form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    // Form fields
    const nameField = contactForm.querySelector("#contact-name");
    const emailField = contactForm.querySelector("#contact-email");
    const messageField = contactForm.querySelector("#contact-message");
    const status = contactForm.querySelector(".form-status");

    // Validate the name field
    const validateName = () => {
        const value = nameField.value.trim();

        if (!value) {
            nameField.setCustomValidity("Name is required.");
            return false;
        }

        if (/\d/.test(value)) {
            nameField.setCustomValidity("Name cannot contain numbers.");
            return false;
        }

        nameField.setCustomValidity("");
        return true;
    };

    // Validate the email field
    const validateEmail = () => {
        const value = emailField.value.trim();

        if (!value) {
            emailField.setCustomValidity("Email is required.");
            return false;
        }

        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!validEmail) {
            emailField.setCustomValidity("Please enter a valid email address.");
            return false;
        }

        emailField.setCustomValidity("");
        return true;
    };

    // Validate the message field
    const validateMessage = () => {
        const value = messageField.value.trim();

        if (!value || value.length < 10) {
            messageField.setCustomValidity("Please enter at least 10 characters in your message.");
            return false;
        }

        messageField.setCustomValidity("");
        return true;
    };

    // Clear validation messages while typing
    [nameField, emailField, messageField].forEach((field) => {
        field.addEventListener("input", () => {
            field.setCustomValidity("");
        });
    });

    // Handle form submit
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const validName = validateName();
        const validEmail = validateEmail();
        const validMessage = validateMessage();

        if (!validName || !validEmail || !validMessage) {
            status.textContent = "";
            contactForm.reportValidity();
            return;
        }

        status.textContent = "Your enquiry has been sent successfully. Our team will contact you soon.";
        contactForm.reset();
    });
}