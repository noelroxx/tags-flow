var https = require("https");
var demo = require('../modules/api-vkontakte-demo.json');

var vkontakte = exports = module.exports = function(){
  this.getFeeds = function(callback){
    var options = {
      host: 'api.vk.com',
      path: '/method/newsfeed.search?q=Дуров'
    };

    https.get(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        // console.log(chunk);
      });
      // console.log(res);
      // console.log('STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      // console.log('CONTENT:' + JSON.stringify(res.headers));
    }).on('error', function(e) {
          console.log('ERROR: ' + e.message);
        });
    setTimeout(function(){return callback(demo);},1000);
  };

  return this;
};

var vk = new vkontakte();

vk.getFeeds(function(result){
  console.log(result);
});