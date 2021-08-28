const loadQuote = () => {
    fetch(`https://api.kanye.rest/`)
        .then(res => res.json())
        .then(data => displayQuote(data))
}
loadQuote();
const displayQuote = quotes => {
    const kanyeQuotes = document.getElementById("kanye-quote");
    const blockQuote = document.createElement("blockquote");
    kanyeQuotes.textContent = " ";
    blockQuote.classList.add("quote-style");
    blockQuote.innerText = quotes.quote;
    kanyeQuotes.appendChild(blockQuote);
}
const next = document.getElementById("next");
next.addEventListener("click", function () {
    loadQuote();
})