const button = document.getElementById("theme-toggle");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const searchBox = document.querySelector(".search input");
const cards = document.querySelectorAll(".explore");

searchBox.addEventListener("input", function () {
    const word = searchBox.value.toLowerCase();

    for (let i = 0; i < cards.length; i++) {
        const cardText = cards[i].textContent.toLowerCase();

        if (cardText.includes(word)) {
            cards[i].classList.remove("filtered-out");
        } else {
            cards[i].classList.add("filtered-out");
        }
    }
});