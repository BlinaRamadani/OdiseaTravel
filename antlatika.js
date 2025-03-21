function saveHotelData(event, name, image, price) {
    event.preventDefault(); 

    let hotelData = {
        name: name,
        image: image,
        price: price,
        description: `Enjoy a wonderful stay at our ${name}. Modern amenities, beautiful views, and exceptional service await you.`
    };

    localStorage.setItem("selectedHotel", JSON.stringify(hotelData));
    window.location.href = "hotel-details.html"; 
}

function calculatePrice() {
    var checkinDate = document.getElementById('checkin').value;
    var checkoutDate = document.getElementById('checkout').value;

    if (checkinDate && checkoutDate) {
        var checkin = new Date(checkinDate);
        var checkout = new Date(checkoutDate);
        
        if (checkout > checkin) {
            var diffTime = checkout - checkin;
            var diffDays = diffTime / (1000 * 3600 * 24); 
            
            var pricePerNight = 100; 
            var totalPrice = diffDays * pricePerNight;

            document.getElementById('price').innerText = "Çmimi: " + totalPrice + "€";
        } else {
            alert("Data e daljes duhet të jetë pas datës së hyrjes.");
        }
    }
}

function calculatePrice() {
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    
    if (!checkin || !checkout) {
        document.getElementById("price").innerText = "Çmimi: 0€";
        return;
    }


    var checkinDate = new Date(checkin);
    var checkoutDate = new Date(checkout);
    var timeDifference = checkoutDate - checkinDate;
    var days = timeDifference / (1000 * 3600 * 24); 

    if (days <= 0) {
        document.getElementById("price").innerText = "Çmimi: 0€";
        return;
    }

    
    var roomType = document.getElementById("roomType").value;
    var pricePerDay;

    if (roomType === "luxury") {
        pricePerDay = 100; 
    } else if (roomType === "twin") {
        pricePerDay = 80; 
    } else {
        pricePerDay = 60; 
    }

    var totalPrice = days * pricePerDay;

    document.getElementById("price").innerText = "Çmimi: " + totalPrice + "€";
}



    function bookRoom(roomId) {
        localStorage.setItem(roomId, 'booked');  
        window.location.href = "price.html";     
    }

    document.addEventListener("DOMContentLoaded", function() {
        let rooms = document.querySelectorAll(".room");
        rooms.forEach(room => {
            if (localStorage.getItem(room.id) === 'booked') {
                room.style.backgroundColor = "#ffcccb"; 
            }
        });
    });

