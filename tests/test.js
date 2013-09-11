var request = require('superagent');
//var expect = require('expect.js');
//var should = require('should');

var chai = require('chai');
var expect = chai.expect;

var twitter = require('../modules/api-twitter');

// var assert = require("assert");
describe('Twitter', function(){
  describe('getFeeds', function(){
    it('should return some feeds ready to export', function(done){
      var newTw = new twitter();
      newTw.get(function(result){
        expect(result).to.be.a('object');
        expect(result[0]).to.have.property('author');
        expect(result[0]).to.have.property('content');
        expect(result[0]).to.have.property('source');
        expect(result[0]).to.have.property('date');
        done()
      });
    })
  })
});