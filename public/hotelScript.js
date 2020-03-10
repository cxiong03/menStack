async function createHotel(hotelName, checkInDate, CheckOutDate, roomType, room) {
    const hotel = new Hotel({
        hotelName,
        checkInDate,
        CheckOutDate,
        roomType,
        room
    });
    const result = await hotel.save();
    console.log(result)
}

createHotel(hotelName, checkInDate, CheckOutDate, roomType, room)