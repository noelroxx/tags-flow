var Twit = require('twit');
var config = require('../config');

var twitter = exports = module.exports = function(){
  var T = new Twit({
    consumer_key:         config.twitter.consumerKey,
    consumer_secret:      config.twitter.consumerSecret,
    access_token:         config.twitter.accessToken,
    access_token_secret:  config.twitter.accessTokenSecret
  });

  this.get = function(callback){
    T.get('search/tweets', { q: '#sxsw', count: 3 }, function(err, reply) {
      return callback(reply);
    });
  }

  this.getInfo = function(){
    return "Hello, World!";
  }

  return this;
}
