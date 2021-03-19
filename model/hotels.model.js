const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const hotelSchema = Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  number_of_rooms: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Hotel', hotelSchema);