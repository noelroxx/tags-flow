var express = require('express');
    app = express(),
    port = 5000;
 
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/dist'));

// app.get('/callback/:tagName', function(request, response){
// 	var params = url.parse(request.url, true).query;
// 	response.send(params['hub.challenge'] || 'No hub.challenge present');
// });

// app.post('/callback/:tagName', function(request, response){
//     // The POST callback for Instagram to call every time there's an update
//     // to one of our subscriptions.
    
//     // First, let's verify the payload's integrity by making sure it's
//     // coming from a trusted source. We use the client secret as the key
//     // to the HMAC.
//     var hmac = crypto.createHmac('sha1', settings.CLIENT_SECRET);
//     hmac.update(request.rawBody);
//     var providedSignature = request.headers['x-hub-signature'];
//     var calculatedSignature = hmac.digest(encoding='hex');
    
//     // If they don't match up or we don't have any data coming over the
//     // wire, then bail out early.
//     if((providedSignature != calculatedSignature) || !request.body)
//         response.send('FAIL');
    
//     // Go through and process each update. Note that every update doesn't
//     // include the updated data - we use the data in the update to query
//     // the Instagram API to get the data we want.
// 	var updates = request.body;
// 	var geoName = request.params.geoName;
// 	for(index in updates){
// 		var update = updates[index];
// 		if(update['object'] == "geography")
// 			helpers.processGeography(geoName, update);
// 	}
// 	response.send('OK');
// });

app.listen(port);
console.log('Running at', port);