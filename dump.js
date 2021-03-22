
const hotels = [
  {
    hotel_id: 1,
    name: "hotel 1",
    city: "city 1",
    number_of_rooms: 100,
    price: 10
  },
  {
    hotel_id: 2,
    name: "hotel 2",
    city: "city 2",
    number_of_rooms: 200,
    price: 300
  },
  {
    hotel_id: 3,
    name: "hotel 3",
    city: "city 3",
    number_of_rooms: 50,
    price: 50
  },
  {
    hotel_id: 4,
    name: "hotel 4",
    city: "city 4",
    number_of_rooms: 100,
    price: 150
  },
  {
    hotel_id: 5,
    name: "hotel 5",
    city: "city 5",
    number_of_rooms: 100,
    price: 200
  }
]

const listOfReservation = [
  {
    hotel_id: 2,
    arrival_date: 2021120,
    departure_date: 2021121,
    number_of_rooms: 1
  },
  {
    hotel_id: 1,
    arrival_date: 2021214,
    departure_date: 2021215,
    number_of_rooms: 1
  },
  {
    hotel_id: 3,
    arrival_date: 2021320,
    departure_date: 2021323,
    number_of_rooms: 1
  },
  {
    hotel_id: 5,
    arrival_date: 2021220,
    departure_date: 2021223,
    number_of_rooms: 1
  }
]

const todaysDate = new Date().getFullYear().toString() +
  new Date().getMonth().toString() + new Date().getDate().toString();

const checkReservation = {
  arrival_date: 2021314,
  departure_date: 2021315,
  number_of_rooms: 2
}

// check reservations (arrival_date and departure_date must be greater than check reservation)

const availableResevation = [];

listOfReservation.map(reservation => {
  if (checkReservation.arrival_date > reservation.arrival_date &&
    checkReservation.arrival_date > reservation.departure_date) {
    return availableResevation.push(reservation.hotel_id);
  }
  return;
});

// console.log("Available Reservation====================>", availableResevation);


// Available Hotels

const availableHotels = [];

hotels.map((item) => {
  for (var i = 0; i < availableResevation.length; i++) {
    if (item.hotel_id === availableResevation[i] &&
      item.number_of_rooms >= checkReservation.number_of_rooms) {
      return availableHotels.push(item);
    }
  }
  return;
})

// console.log("Available Hotels====================>", availableHotels);

const compare = (a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

// console.log(availableHotels.sort(compare));
