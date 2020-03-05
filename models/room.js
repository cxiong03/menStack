const mongoose = require("mongoose");

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

const Room = mongoose.model('Room',roomSchema);

module.exports.Room = Room;
module.exports.roomSchema = roomSchema;