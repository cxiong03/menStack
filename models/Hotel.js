const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        require: true
    },
    checkInDate: {
        type: String,
        require: true
    },
    checkOutDate: {
        type: String,
        require: true
    },
    roomType: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);