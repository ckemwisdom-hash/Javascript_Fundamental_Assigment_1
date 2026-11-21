let hotelRoom = {
    location: "Aberdeen",
    pricePerNight: 500,
    guestName: "Kemoh Wisdom",
    nights: 3,

    amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"],

    bathroom: {
        count: 1,
        hasJacuzzi: true
    }
};

// Log the entire amenities array
console.log(hotelRoom.amenities);

// Log only the hasJacuzzi property
console.log(hotelRoom.bathroom.hasJacuzzi);

// Calculate the total bill
let totalBill = hotelRoom.pricePerNight * hotelRoom.nights;

// Print the booking summary using template literals
console.log(`
===== BOOKING SUMMARY =====
Guest Name: ${hotelRoom.guestName}
Location: ${hotelRoom.location}
Number of Nights: ${hotelRoom.nights}
Total Bill: ${totalBill}
==========================
`);