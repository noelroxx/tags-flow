var request = require('superagent');
var expect = require('expect.js');
var should = require('should');

var twitter = require('../modules/api-twitter');

// var assert = require("assert");
describe('Twitter', function(){
  describe('getInfo', function(){
    it('should return some string', function(){
      var newTw = new twitter();
      newTw.getInfo().should.be.a('string')
    })
  })
})