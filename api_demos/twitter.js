var OAuth = require('OAuth'),
    util = require('util');

var oauth = new OAuth.OAuth(
	'https://api.twitter.com/oauth/request_token',
	'https://api.twitter.com/oauth/access_token',
	'4WGwOe7sbsbrrTKnSFkcw',
	'9T8zFlDB59F0ePa4kpZzjikl7OeN4NLbxzoH3vCYYD0',
	'1.0A',
	null,
	'HMAC-SHA1'
);

oauth.get(
	'https://api.twitter.com/1.1/trends/place.json?id=23424977',
	'1513931966-ZMeYPFAoT6S3PUZNtyzhw7xMjcJDTQEuvG9AfK8', 
	//you can get it at dev.twitter.com for your own apps
	'ieCr7QnwWOYegaj2dPpwDV1HKSigpYqXkJuzw5vNLSA', 
	//you can get it at dev.twitter.com for your own apps
	function(error, data, res) {
		if(error) {
			console.error(error);
		}
		console.log(util.inspect(data));
	}
);