
const mongoose = require('mongoose');
const roomSchema = require('./room')

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        require: true
    },
    hotelAddress: {
        type: String,
    },
    city: {
        type: String
    },
    state: {
        type: String,
        require: true
    },

    // room: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Room'
    //     }

    rooms: [roomSchema]
});

module.exports = mongoose.model('Hotel', hotelSchema)
