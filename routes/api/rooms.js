const {Room} = require('../../models/room')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const rooms = await Room.find().sort('roomNumber');
    res.send(rooms);
});

router.post('/', async (req, res) => {
    let room = new Room({
  });

  room = await room.save();
  res.send(room);
});