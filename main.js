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

function changeIcon() {
    var select = document.getElementById('payment');
    var selectedOption = select.options[select.selectedIndex];
    var iconClass = selectedOption.getAttribute('data-icon');
    var icon = document.getElementById('payment-icon');
    
    icon.className = 'fa-solid ' + iconClass;
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


