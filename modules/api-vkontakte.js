var https = require("https");
var demo = require('../modules/api-vkontakte-demo.json');
//demo.response.shift();

var vkontakte = exports = module.exports = function(){
  this.get = function(callback){
    var options = {
      host: 'api.vk.com',
      path: '/method/newsfeed.search?q=Дуров'
    };

//    console.log(demo);

//    https.get(options, function(res) {
//      res.setEncoding('utf8');
//      res.on('data', function (chunk) {
//        // console.log(chunk);
//      });
//      // console.log(res);
//      // console.log('STATUS: ' + res.statusCode);
//      // console.log('HEADERS: ' + JSON.stringify(res.headers));
//      // console.log('CONTENT:' + JSON.stringify(res.headers));
//    }).on('error', function(e) {
//          console.log('ERROR: ' + e.message);
//        });
    setTimeout(function(){return callback(exportFeeds(demo.response));},1000);
  };

  function exportFeeds(data){
    var feeds = [];
    for (var i in data){
      feeds[i] = {
        content: data[i].text,
        date: data[i].date
      }
    }
    return feeds;
  }

  return this;
};