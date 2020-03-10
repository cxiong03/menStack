async function createHotel(hotelName, hotelAddress, hotelCity, hotelState, room) {
    const hotel = new Hotel({
        hotelName,
        hotelAddress,
        hotelCity,
        hotelState,
        room
    });
    const result = await hotel.save();
    console.log(result)
}

createHotel(hotelName, hotelAddress, hotelCity, hotelState, room)