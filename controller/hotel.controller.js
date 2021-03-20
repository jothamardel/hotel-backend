const ReserveSchema = require('../model/reserve.model');
const HotelSchema = require('../model/hotels.model');

exports.createReservation = (req, res, next) => {
  console.log(req.body)
  new ReserveSchema({ ...req.body })
    .save()
    .then(data => {
      const _id = data.hotel_id;
      HotelSchema.findOne({ _id })
        .then(doc => {
          if (doc) {
            const newDoc = { ...doc._doc }
            doc.overwrite({ ...newDoc, number_of_rooms: newDoc.number_of_rooms - 1 });
            return doc.save();
          }
        })
        .then(data => res.status(200).json("Reservation successful."))
        .catch(err => res.status(400).json("Unable to create reservation."))
    })
    .catch(error => {
      console.log(error);
      res.status(400).json("Unsuccessful.");
    })
}


exports.createHotel = (req, res, next) => {
  new HotelSchema({ ...req.body })
    .save()
    .then(data => res.status(200).json('Hotel created.'))
    .catch(error => res.status(400).json('Unable to create.'))
}


exports.searchForReservation = (req, res, next) => {
  const checkReservation = { ...req.body }
  console.log(req.body);
  // searches for available reservations and returns just the hotel_id.
  ReserveSchema.find()
    .then(data => {
      const availableResevation = [];
      if (data.length) {
        data.map(reservation => {
          if (checkReservation.arrival_date > reservation.arrival_date &&
            checkReservation.arrival_date > reservation.departure_date) {
            return availableResevation.push(reservation.hotel_id);
          }
          return;
        });
      }
      return availableResevation;
    })
    .then(id => {

      // searches for hotels according to the id provided.
      HotelSchema.find()
        .then(data => {
          const availableHotels = [];
          if (data.length) {
            data.map((item) => {
              for (var i = 0; i < id.length; i++) {
                if (item._id.toString() === id[i] &&
                  item.number_of_rooms >= checkReservation.number_of_rooms) {
                  return availableHotels.push(item);
                }
              }
              return;
            });
          }
          // Sorts result lowest price first
          const compare = (a, b) => {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          }
          if (!availableHotels.length) {
            res.status(404).json({
              hotels: availableHotels,
              message: "No hotel(s) found."
            });
            return;
          }


          res.status(200).json({
            hotels: availableHotels.sort(compare),
            message: "Successful."
          });
        })
        .catch(error => res.status(404).json("Not available."))
    })
    .catch(error => res.status(400).json("No data available."))
}