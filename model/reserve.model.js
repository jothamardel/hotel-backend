const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reservationSchema = Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hotel_id: {
    type: String,
    required: true
  },
  arrival_date: {
    type: Number,
    required: true
  },
  departure_date: {
    type: Number,
    required: true
  },
  number_of_rooms: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Reservation', reservationSchema);