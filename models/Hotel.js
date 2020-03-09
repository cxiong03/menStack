const mongoose = require('mongoose');
const roomSchema = require('./room')

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
        require: true,
    // room: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Room'
    //     }

    rooms: [roomSchema]
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);