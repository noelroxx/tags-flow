Get access tokens for API:

#Facebook
https://graph.facebook.com/oauth/access_token?client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&grant_type=client_credentials 

https://graph.facebook.com/search?q=QUERY&type=post&access_token=ACCESS_TOKEN

#VKontakte
https://api.vk.com/method/newsfeed.search?q=QUERY

#Instagram
Add subscribe for hashtag notifier

curl -F 'client_id=cd5e7bd912c940b8abbbf5389b261dd9' -F 'client_secret=ff28e6b0f3a0407e86bd6e82d5db4645' -F 'object=tag' -F 'aspect=media' -F 'object_id=nofilter' -F 'callback_url=http://YOUR-CALLBACK/URL' https://api.instagram.com/v1/subscriptions/

Show all subscriptions

https://api.instagram.com/v1/subscriptions?client_secret=ff28e6b0f3a0407e86bd6e82d5db4645&client_id=cd5e7bd912c940b8abbbf5389b261dd9

To delete

curl -X DELETE https://api.instagram.com/v1/subscriptions?client_secret=ff28e6b0f3a0407e86bd6e82d5db4645&object=all&client_id=cd5e7bd912c940b8abbbf5389b261dd9

Configuration

First register a new API client at http://instagram.com/developer/manage/ to get a client id and secret. For this app, the values for website and callback URL are not important. I just used http://localhost:3000.

Instead of editing settings.js to configure the client id and secret as suggested in the original project README, set environment variables which settings.js is already written to pick up. This is also useful for some of the utility commands you can execute against the API using curl as I describe below. You can either set them in each terminal session or globally in your shell environment (.profile, .bashrc, .zshrc).

export IG_CLIENT_ID=YOUR_CLIENT_ID
export IG_CLIENT_SECRET=YOUR_CLIENT_SECRET
I added a bunch of logging statements at key points in the code when doing my original troubleshooting. If you want to hide these additional messages, in settings.js, set:

exports.debug = false;