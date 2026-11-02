// Search input and service cards
const serviceSearch = document.querySelector("#service-search");
const serviceCards = document.querySelectorAll(".service-card");

if (serviceSearch) {
    // Filter service cards based on the search text
    serviceSearch.addEventListener("input", () => {
        const query = serviceSearch.value.trim().toLowerCase();

        serviceCards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            const matches = cardText.includes(query);

            // Hide cards that do not match
            card.style.display = matches ? "" : "none";
        });
    });
}