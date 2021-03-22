const request = require('supertest');
const app = require('../index');


describe("Post Endpoint", () => {
  it('should create a new post request', async (done) => {
    const res = await request(app)
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
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('john')
    done();
  })
});


// describe('POST /users', function () {
//   it('responds with json', function (done) {
//     request(app)
//       .post('/reserve')
//       .send({
//         first_name: "Rachel",
//         last_name: "Bee",
//         phone: "07033888990",
//         email: "rachelbee@email.com",
//         hotel_id: "6053d59900bca5056a2f4e75",
//         arrival_date: 2021412,
//         departure_date: 2021422,
//         number_of_rooms: 1
//       })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function (err, res) {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });