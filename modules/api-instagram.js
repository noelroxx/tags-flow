var https = require("https");
var demo = require('../modules/api-instagram-demo.json');


var instagram = exports = module.exports = function(){
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

  this.getFeeds = function(){
    setTimeout(function(){return callback(demo);},1000);
  }
};

var inGram = new instagram();

inGram.getToken(function(result){

});