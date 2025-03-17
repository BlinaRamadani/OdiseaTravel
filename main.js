const sampleData = [
    "Brezovica",
    "Rugova Canyon ",
    "Gadime Cave  ",
    "Mirusha Waterfalls",
    "Prizren ",
    "Lake Gazivoda"
];

function performSearch() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";
    let filteredResults = sampleData.filter(item => item.toLowerCase().includes(input));

    if (input.trim() === "") {
        resultsDiv.style.display = "none";
        return;
    }

    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            let p = document.createElement("p");
            p.textContent = result;
            p.classList.add("result-item");
            resultsDiv.appendChild(p);
        });
    } else {
        let noResults = document.createElement("p");
        noResults.textContent = "No results found";
        noResults.classList.add("no-results");
        resultsDiv.appendChild(noResults);
    }

    resultsDiv.style.display = "block";
}


document.getElementById('date').addEventListener('focus', function () {
    this.style.zIndex = 9999;
});

