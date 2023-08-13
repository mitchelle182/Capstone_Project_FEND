import server from './src/server/server.js';
import request from 'supertest';

describe('server', function () {
  it('loads', function (done) {
    request(server).get('/').expect(200, done);
  });
});