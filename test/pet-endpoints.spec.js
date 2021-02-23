const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');

describe('Pet Endpoints', () => {
  it('GET /pets responds with 200 and the next pets in line', () => {
    return supertest(app)
      .get('/api/pets')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.dog).to.be.an('object');
        expect(res.body.cat).to.be.an('object');
      });
  });

  it('DELETE /pet removes selected pet from line and the next person in line and returns the new pet/owner combo', () => {
    return supertest(app)
      .delete('/api/pets/cat')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.pet).to.be.an('object');
        expect(res.body.owner).to.be.a('string');
      });
  });
});