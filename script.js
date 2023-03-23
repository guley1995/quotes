async function loadQuote() {
    const response = await fetch('https://quotes.rest/qod?category=inspire&' + Math.random());
    const data = await response.json();
    const quote = data.contents.quotes[0].quote;
    document.getElementById('quote').innerHTML = quote;
}
