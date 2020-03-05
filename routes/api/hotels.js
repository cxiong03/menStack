const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// POST
router.post('/', async (req, res) => {
    const { hotelName, checkInDate, checkOutDate, roomType } = req.body;

    const hotel = new Hotel({
        hotelName,
        checkInDate,
        checkOutDate,
        roomType
    });

    try {
        const newHotel = await hotel.save();
        res.status(201).json(newHotel)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// GET ALL HOTEL
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// PUT

// DELETE