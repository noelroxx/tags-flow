var request = require('superagent');
//var expect = require('expect.js');
//var should = require('should');

var chai = require('chai');
var expect = chai.expect;

var twitter = require('../modules/api-twitter');

// var assert = require("assert");
describe('Twitter', function(){
  describe('getTweets', function(){
    it('should return some tweets', function(done){
      var newTw = new twitter();
      newTw.get(function(result){
          expect(result).to.be.a('object');
          done()
      });
    })
  })
});