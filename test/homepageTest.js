var index = require('../index')
var chai = require('chai')
var chaiHttp = require('chai-http')
var expect = chai.expect
chai.use(chaiHttp);

describe('landing page', function(){
  it('should render successfully', function(){
    chai.request(index)
    .get('/')
    .end(function(err, res) {
      expect(res).to.have.status(200)
    })
  })
})
