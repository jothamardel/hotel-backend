const express = require('express');
const hotelController = require('../controller/hotel.controller');
const reservationSchema = require('../middleWare/reserve.validation');

const router = express.Router();

router.post('/create-hotel', hotelController.createHotel);
router.post('/search-hotel', hotelController.searchForReservation);
router.post('/reserve', reservationSchema, hotelController.createReservation);





module.exports = router;