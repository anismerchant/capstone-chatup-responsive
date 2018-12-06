var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/public/index.html');
});

// User connects and disconnects
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    // Server receive message from user
    socket.on('message', function(msg){
        console.log('message: ' + msg);
        // Server get the message from user and sends it back to everyone connected  
        io.emit('message', msg);
    });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});