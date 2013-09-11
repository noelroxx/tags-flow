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
//    T.get('search/tweets', { q: '#syria', count: 10 }, function(err, reply) {
//      return callback(reply);
//    });
    setTimeout(function(){return callback(exportFeeds(demo));},1000)
  };

  function exportFeeds(data){
    var feeds = [];
    for (var i in data.statuses){
      feeds[i] = {
        author : data.statuses[i].user['screen_name'],
        content: data.statuses[i].text,
        source: 'https://twitter.com/' + data.statuses[i].user['screen_name'] + '/status/' + data.statuses[i].id_str,
        date: data.statuses[i].created_at
      }
    }
    return feeds;
  }

  return this;
};
