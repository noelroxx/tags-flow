require.config({
  shim: {
    'socket.io': {
      exports: 'socket.io'
    },
    'jquery': {
      exports: 'jquery'
    }
  },
  paths: {
    'socket.io': '../bower_components/socket.io-client/dist/socket.io',
    'jquery': '../bower_components/jquery/jquery'
  }
});
 
require(['socket.io', 'jquery'], function(io, $){
  var socket = io.connect('http://localhost');

  socket.on('feeds', function(data) {
    var feeds = $('#feeds');
    console.log(data);
    for(var key in data) {
      feeds.append('<p>' + data[key].author + '<br/>' + data[key].content + '</p>');
    }
  });

  $('#subscribeHashTag').on('click', function(event) {
    var query = $('#hashTag').val();
    socket.emit('subscribe', {query: query});
  });
});