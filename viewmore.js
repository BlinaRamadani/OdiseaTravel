function saveHotelData(event, name, image, price) {
    event.preventDefault(); // Parandalon hapjen e menjëhershme të faqes

    let hotelData = {
        name: name,
        image: image,
        price: price,
        description: `Enjoy a wonderful stay at our ${name}. Modern amenities, beautiful views, and exceptional service await you.`
    };

    localStorage.setItem("selectedHotel", JSON.stringify(hotelData));
    window.location.href = "hotel-details.html"; // Hap faqen e re
}

function calculatePrice() {
    var checkinDate = document.getElementById('checkin').value;
    var checkoutDate = document.getElementById('checkout').value;

    if (checkinDate && checkoutDate) {
        var checkin = new Date(checkinDate);
        var checkout = new Date(checkoutDate);
        
        if (checkout > checkin) {
            // Llogaritja e diferencës mes datave
            var diffTime = checkout - checkin;
            var diffDays = diffTime / (1000 * 3600 * 24); // Kthehet si numri i ditëve
            
            // Çmimi për natë (mund ta bëni më të larmishëm në varësi të ditëve të javës, festave etj.)
            var pricePerNight = 100; // Çmimi për natë
            var totalPrice = diffDays * pricePerNight;

            // Përditëso çmimin
            document.getElementById('price').innerText = "Çmimi: " + totalPrice + "€";
        } else {
            alert("Data e daljes duhet të jetë pas datës së hyrjes.");
        }
    }
}

function calculatePrice() {
    // Merr datat e hyrjes dhe daljes
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    
    // Sigurohu që të dyja datat të jenë zgjedhur
    if (!checkin || !checkout) {
        document.getElementById("price").innerText = "Çmimi: 0€";
        return;
    }

    // Llogarit numrin e ditëve të qëndrimit
    var checkinDate = new Date(checkin);
    var checkoutDate = new Date(checkout);
    var timeDifference = checkoutDate - checkinDate;
    var days = timeDifference / (1000 * 3600 * 24); // Ktheni ditët

    // Sigurohu që numri i ditëve të jetë pozitiv
    if (days <= 0) {
        document.getElementById("price").innerText = "Çmimi: 0€";
        return;
    }

    // Merr llojin e dhomës dhe caktimin e çmimit përkatës
    var roomType = document.getElementById("roomType").value;
    var pricePerDay;

    if (roomType === "luxury") {
        pricePerDay = 100; // Çmimi për dhomë luksoze
    } else if (roomType === "twin") {
        pricePerDay = 80; // Çmimi për dy shtreter të ndarë
    } else {
        pricePerDay = 60; // Çmimi për dhomë standarde
    }

    // Llogarit çmimin total
    var totalPrice = days * pricePerDay;

    // Trego çmimin total
    document.getElementById("price").innerText = "Çmimi: " + totalPrice + "€";
}
