// Select the booking form from the page
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
    // Store required form inputs
    const firstName = bookingForm.querySelector("#fname");
    const surname = bookingForm.querySelector("#sname");
    const bookingTime = bookingForm.querySelector("#btime");
    const statusMessage = bookingForm.querySelector(".form-status");

    // Validate the text fields and booking date
    function updateCustomValidity() {
        [firstName, surname].forEach((field) => {
            const value = field.value.trim();

            if (!value) {
                field.setCustomValidity("Please enter your name.");
            } else if (/\d/.test(value)) {
                field.setCustomValidity("Names cannot contain numbers.");
            } else {
                field.setCustomValidity("");
            }
        });

        const selectedTime = new Date(bookingTime.value);
        if (bookingTime.value && selectedTime <= new Date()) {
            bookingTime.setCustomValidity("Choose a date and time in the future.");
        } else {
            bookingTime.setCustomValidity("");
        }
    }

    // Attach validation to the fields as the user types
    [firstName, surname, bookingTime].forEach((field) => {
        field.addEventListener("input", updateCustomValidity);
        field.addEventListener("change", updateCustomValidity);
    });

    // Handle form submission
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        updateCustomValidity();

        if (!bookingForm.reportValidity()) {
            statusMessage.textContent = "";
            return;
        }

        // Create a friendly confirmation message
        const hour = new Date().getHours();
        const greeting = hour < 5
            ? "Good evening"
            : hour < 12
                ? "Good morning"
                : hour < 17
                    ? "Good afternoon"
                    : "Good evening";

        const bookerName = `${firstName.value.trim()} ${surname.value.trim()}`;

        statusMessage.textContent =
            `${greeting}, ${bookerName}! We have received your booking details.We are happy to assist in you in your medical or health issues.`;
    });
}