const request = require('supertest');
const server = require('./server.js');

describe('Server test', () => {
 it('get data from business info route', (done) => {
  request(server).get('/businesses/1/business_info').expect(200).end(done);
 });
 it('get data from business app route', (done) => {
  request(server).get('/businesses/1/business_map').expect(200).end(done);
 });
 it('get data from business name route', (done) => {
  request(server).get('/businesses/aquas').expect(200).end(done);
 });

 it('get the correct data from api', (done) => {
  request(server).get('/businesses/aquas').expect(200).expect(/[{"id":100}]/, done);
 });

});