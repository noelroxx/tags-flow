var express = require('express'),
  io = require('socket.io'),
  url = require('url'),
  crypto = require('crypto'),
  app = express(),
  graph = require('fbgraph'),
  config = require('./config'),
  https = require("https");

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

// https://github.com/ttezel/twit
var Twit = require('twit');

var T = new Twit({
  consumer_key:         config.twitter.consumerKey,
  consumer_secret:      config.twitter.consumerSecret,
  access_token:         config.twitter.accessToken,
  access_token_secret:  config.twitter.accessTokenSecret
});

// T.get('search/tweets', { q: '#sxsw', count: 3 }, function(err, reply) {
//   console.log(reply);
// })

 
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/frontend'));

app.get('/callbacks/instagram/:tagName', function(request, response) {
  // The GET callback for each subscription verification.
  var params = url.parse(request.url, true).query;

  console.log('instagrams GET params', params['hub.mode'], params['hub.challenge'], params['hub.verify_token']);

  response.end(params['hub.challenge'] || 'No hub.challenge present.');
});

app.post('/callbacks/instagram/:tagName', function(request, response) {
  var calculatedSignature, providedSignature, encoding, hmac;
  if (request.rawBody === null || request.headers['x-hub-signature'] === void 0 || request.headers['x-hub-signature'] === null) {
    return false;
  }
  hmac = crypto.createHmac('sha1', config.instagram.clientSecret);
  hmac.update(request.rawBody);
  calculatedSignature = hmac.digest(encoding = 'hex');
  providedSignature = request.headers['x-hub-signature'];
  if (providedSignature !== calculatedSignature) {
    return false;
  }

  console.log(request.body, request.params.tagName);
  response.end('OK');

  // The POST callback for Instagram to call every time there's an update
  // to one of our subscriptions.

  // First, let's verify the payload's integrity by making sure it's
  // coming from a trusted source. We use the client secret as the key
  // to the HMAC.
  // var hmac = crypto.createHmac('sha1', config.instagram.clientSecret);
  // hmac.update(request.rawBody);
  // var providedSignature = request.headers['x-hub-signature'];
  // var calculatedSignature = hmac.digest(encoding = 'hex');

  // // If they don't match up or we don't have any data coming over the
  // // wire, then bail out early.
  // if((providedSignature != calculatedSignature) || !request.body) {
  //   response.status(500).end('FAIL');
  // }

  // tagName = request.params.tagName;
  // Go through and process each update. Note that every update doesn't
  // include the updated data - we use the data in the update to query
  // the Instagram API to get the data we want.
  // var updates = request.body;
  // var geoName = request.params.geoName;
  // for(index in updates){
  //   var update = updates[index];
  //   if(update['object'] == "geography")
  //     helpers.processGeography(geoName, update);
  // }
  // response.end('OK');
});

var server = app.listen(config.port);
console.log('Running server at', config.port);

var ioserver = io.listen(server);

ioserver.sockets.on('connection', function(socket) {
  socket.on('subscribe', function(data) {
    console.log('client subscribed with query #' + data.query);
    setInterval(function() {
      socket.emit('feeds', {
        foo: 'bar',
        one: 'two'
      });
    }, 5000);
  });
});
