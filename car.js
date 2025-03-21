const cars = [
    { name: "Toyota Corolla", price: 80, image: "img/toyota.jpg" },
    { name: "Honda Civic", price: 90, image: "img/honda.jpg" },
    { name: "BMW 5", price: 150, image: "img/bmw.jpg" },
    { name: "Audi A4", price: 130, image: "img/audi.jpg" },
    { name: "Ford Mustang", price: 170, image: "img/ford.jpg" },
    { name: "Mercedes", price: 170, image: "img/mercedes.jpg" },
    { name: "Range Rover", price: 160, image: "img/car.jpg" },
    { name: "Kia", price: 120, image:"img/kia.jpg" },
];

const carGrid = document.getElementById("car-grid");
const priceFilter = document.getElementById("price-filter");
const searchCar = document.getElementById("search-car");

// Display cars
function displayCars(cars) {
    carGrid.innerHTML = "";
    cars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>$${car.price} per day</p>
            <a href="carboking.html" class="btn">Book Now</a>
        `;
        carGrid.appendChild(carCard);
    });
}

function filterCars() {
    const filterValue = priceFilter.value;
    let sortedCars = [...cars];

    if (filterValue === "low") {
        sortedCars.sort((a, b) => a.price - b.price);
    } else if (filterValue === "high") {
        sortedCars.sort((a, b) => b.price - a.price);
    }

    displayCars(sortedCars);
}

function searchCars() {
    const searchTerm = searchCar.value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm));
    displayCars(filteredCars);
}

// Event listeners
priceFilter.addEventListener("change", filterCars);
searchCar.addEventListener("input", searchCars);

// Initial display
displayCars(cars);


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