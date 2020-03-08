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
        require: true,
    // room: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Room'
    //     }

    rooms: [roomSchema]
    }
});

const roomSchema = new mongoose.Schema({
    roomNumber:{
        type: Number,
        min: 1
    },
    numberOfBeds:{
        type: Number,
        min: 1
    },
    smoking:{
        type: Boolean,
        default:false
    },
    pets:{
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);