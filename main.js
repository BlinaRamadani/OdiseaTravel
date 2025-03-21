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
    const payment = document.getElementById('payment');
    const icon = document.getElementById('payment-icon');
    const selected = payment.options[payment.selectedIndex];
    icon.className = selected.getAttribute('data-icon');
}



function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


window.onload = function () {
    document.getElementById("contact-form").reset();
};


document.addEventListener("DOMContentLoaded", function () {
    let hotelButton = document.querySelector(".extra-services .service-btn[href='hotels.html']");

    if (localStorage.getItem("hotelBooked") === "true") {
        hotelButton.style.backgroundColor = "#000"; 
        hotelButton.textContent = "Hotel Booked"; 
}
});

function bookHotel() {
    localStorage.setItem("hotelBooked", "true"); 
}

    document.addEventListener("DOMContentLoaded", function () {
        let hotelButton = document.querySelector(".extra-services .service-btn[href='hotels.html']");

        if (hotelButton) { 
            if (localStorage.getItem("hotelBooked") === "true") {
                hotelButton.style.backgroundColor = "#ff5733"; 
                hotelButton.textContent = "Hotel Booked"; 
            }
        }
    });

    function bookHotel() {
        localStorage.setItem("hotelBooked", "true"); 
    }

    function resetHotelBooking() {
        localStorage.removeItem("hotelBooked");
        window.location.reload(); 
    }

    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
    
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const pickupDate = document.getElementById("pickup-date").value;
        const returnDate = document.getElementById("return-date").value;
    
        if (!name || !email || !phone || !pickupDate || !returnDate) {
            alert("Please fill out all fields.");
            return;
        }
    
    });
    
    
        document.getElementById("bookingForm").addEventListener("submit", function (event) {
            event.preventDefault(); 
            
            localStorage.setItem("bookingConfirmed", "true"); 
            
            window.location.href = "book.html"; 
        });
    
        document.addEventListener("DOMContentLoaded", function () {
            let bookButton = document.getElementById("bookButton");
    
            if (localStorage.getItem("bookingConfirmed") === "true") {
                bookButton.style.backgroundColor = "#ff5733";
                bookButton.textContent = "Booking Confirmed"; 
            }
        });
    
        
      
    