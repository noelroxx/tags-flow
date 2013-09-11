var Twit = require('twit');
var config = require('../config');
var demo = require('../modules/api-twitter-demo.json');

var twitter = exports = module.exports = function(){
  var T = new Twit({
    consumer_key:         config.twitter.consumerKey,
    consumer_secret:      config.twitter.consumerSecret,
    access_token:         config.twitter.accessToken,
    access_token_secret:  config.twitter.accessTokenSecret
  });

  this.get = function(callback){
//    T.get('search/tweets', { q: '#syria', count: 3 }, function(err, reply) {
//      return callback(reply);
//    });
    setTimeout(function(){return callback(demo);},1000)
  };

  return this;
};

var tw = new twitter();

tw.get (function(result){
  var feeds = [];
  for (var i in result.statuses){
    feeds[i] = {
      author : result.statuses[0].user.name
    }
  }
  console.log(feeds);
});
