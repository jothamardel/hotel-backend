const joi = require('joi');


const reservationValidation = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().required(),
  hotel_id: joi.string().required(),
  arrival_date: joi.number().required(),
  departure_date: joi.number().required(),
  number_of_rooms: joi.number().required()
});


const reservationSchema = (req, res, next) => {
  const { error } = reservationValidation.validate(req.body);

  if (error) {
    return res.status(422).json({
      message: "Please review the required fields!",
      error
    })
  }

  return next();
}

module.exports = reservationSchema;