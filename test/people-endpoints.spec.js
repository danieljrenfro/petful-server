const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');

describe('People Endpoints', () => {
  it('GET /people responds with 200 containing a list of people in line to adopt a pet', () => {
    return supertest(app)
      .get('/api/people')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
      });
  });

  it('POST /people adds new person name to list of people in line to adopt', () => {
    let newPerson = { name : 'Danny Boy' };
    return supertest(app)
      .post('/api/people')
      .expect(201)
      .send(newPerson)
      .then(res => {
        expect(res.body).to.be.a('string');
        expect(res.body).to.eql(newPerson.name);
      });
  });
});