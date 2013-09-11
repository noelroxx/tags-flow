var https = require("https");
var demo = require('../modules/api-vkontakte-demo.json');

var vkontakte = exports = module.exports = function(){
  this.getFeeds = function(callback){
    setTimeout(function(){return callback(demo);},1000);
  };

  return this;
};

var vk = new vkontakte();

vk.getFeeds(function(result){
  console.log(result);
});