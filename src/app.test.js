const request = require('supertest')
const app = require('./app').default

test('test ping === pong', async done => {
  request(app)
    .get('/ping')
    .expect(200)
    .then(res => {
      expect(res.body.ping).toBe('pong')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
});
