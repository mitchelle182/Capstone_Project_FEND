

const request = require('supertest');
const app = require('../../server/server.js');

describe('server', function () {
  it('loads', function (done) {
    request(app).get('/').expect(200, done);
  });
});
