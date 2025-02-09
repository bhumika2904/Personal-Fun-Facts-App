document.getElementById('showFactsBtn').addEventListener('click', function() {
    const facts = [
        "I love the tranquility of beaches.",
        "Mountains captivate me with their grandeur.",
        "Snowy landscapes are my winter wonderland.",
        "Music is the soundtrack to my adventures."
    ];

    const factsList = document.getElementById('funFactsList');
    factsList.innerHTML = '';

    facts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });
});
