const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");

const app = express();

app.use(express.json());

mongoose
  .connect(keys.mongoUri)
  .then(() => console.log("connected to db"))
  .catch(error => console.log("DB Connection error", error));

app.use(express.static("public"));

const hotelRouter = require('./routes/api/hotels');
app.use('api/hotels', hotelRouter);

app.listen(3000, () => console.log("listening on port 3000"));
