var expect  = require('chai').expect;
var request = require('request');
var app = require('../app.js');

it('Page content test', (done) => {
  request.get('http://localhost:3000', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res).to.have.property('body');
      expect(res).property('body').to.match(/Hello world, everything is awesome/);
      done();
  });
});