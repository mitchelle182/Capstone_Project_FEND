


// import request from 'supertest';

const request = require('supertest');
import {app} from './server/server';

describe('server', function () {
  it('loads', function (done) {
    request(app).get('/').send();
    expect(response.statusCode).toBe(200, done);
  });
});
