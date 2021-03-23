const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const hotelRoute = require('./routes/hotels.route');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json("It's working!");
});

app.use(hotelRoute);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => {

    app.listen(PORT, () => {
      // module.exports = app;
      console.log(`Server running on PORT: ${PORT}`)
    });
  })
  .catch(console.log)