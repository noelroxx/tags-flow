var request = require('superagent');
//var expect = require('expect.js');
//var should = require('should');

var chai = require('chai');
var expect = chai.expect;

var twitter = require('../modules/api-twitter');

// var assert = require("assert");
describe('API', function(){
  describe('Twitter', function(){
    it('should return feeds ready to export', function(done){
      var newTw = new twitter();
      newTw.get(function(result){
        console.log(result[0]);
        expect(result).to.be.a('array');
        expect(result).to.have.length.below(10);
        expect(result[0]).to.have.property('author').that.is.a('string');
        expect(result[0]).to.have.property('content').that.is.a('string');
        expect(result[0]).to.have.property('source').that.is.a('string');
        expect(result[0]).to.have.property('date').that.is.a('string');
        done()
      });
    })
  })
});