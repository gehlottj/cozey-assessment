const request = require('supertest');
const app = require('../server/server');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('Orders API', () => {
  let server;

  before(() => {
    it('###### Starting Order unit tests #######', async () => {
      // server = app.listen(4000);
    });
  });

  after(() => {
    it('###### Completed Order unit tests #######', async () => {
    });
  });

  it('should return full picking list', async () => {
  		const res = await request(app).get('/api/orders/getPickingList');
  		expect(res.status).to.equal(200);
  		expect(res.body.success).to.equal(true);
      expect(res.body.data).to.be.an("object");
  });

  it('should return full orders list', async () => {
  		const res = await request(app).get('/api/orders/getOrderList');
  		expect(res.status).to.equal(200);
  		expect(res.body.success).to.equal(true);
  		expect(res.body.data).to.be.an("array");
  });
});