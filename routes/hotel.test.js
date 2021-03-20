const request = require('supertest');
const hotelRoute = require('./hotels.route');


describe("Post Endpoint", () => {
  it('should create a new post request', async () => {
    const res = await request(hotelRoute)
      .post('/reserve')
      .send({
        "first_name": "Rachel",
        "last_name": "Bee",
        "phone": "07033888990",
        "email": "rachelbee@email.com",
        "hotel_id": "6053d59900bca5056a2f4e75",
        "arrival_date": 2021412,
        "departure_date": 2021422,
        "number_of_rooms": 1
      })
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('post')
  })
});