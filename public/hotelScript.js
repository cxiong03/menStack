async function createHotel(hotelName, hotelAddress, city, state, room) {
    const hotel = new Hotel({
        hotelName,
        hotelAddress,
        city,
        state,
        room
    });
    const result = await hotel.save();
    console.log(result)
}

createHotel(hotelName, hotelAddress, city, state, room)