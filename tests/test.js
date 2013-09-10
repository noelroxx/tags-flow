var request = require('superagent');
var expect = require('expect.js');
var should = require('should');

var twitter = require('../modules/api-twitter');

// var assert = require("assert");
describe('Twitter', function(){
  describe('getTweets', function(){
    it('should return some tweets', function(done){
      var newTw = new twitter();
      newTw.get(function(result){
          expect(typeof result).to.eql('object');
          done()
      });
    })
  })
});