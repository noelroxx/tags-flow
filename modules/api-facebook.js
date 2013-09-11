var graph = require('fbgraph');
var https = require("https");
var demo = require('../modules/api-facebook-demo.json');


var facebook = exports = module.exports = function(){
  this.getToken = function(){
    var options = {
      host: 'graph.facebook.com',
      path: '/oauth/access_token?client_id=162085300656149&client_secret=b69928804461e7d40f203bf31e0844c6&grant_type=client_credentials'
    };

    https.get(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log(chunk);
      });
    }).on('error', function(e) {
      console.log('ERROR: ' + e.message);
    });
  };

  this.get = function(callback){
    setTimeout(function(){return callback(exportFeeds(demo.data));},1000);
  };

  function exportFeeds(data){
    var feeds = [];
    for (var i in data){
      feeds[i] = {
        author : data[i].from['name'],
        content: data[i].message,
        date: data[i].created_time
      }
    }
    return feeds;
  }
};