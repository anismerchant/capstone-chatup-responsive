const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let users = [];
let messages = [];

io.on('connection', (socket) => {

    socket.on("message", (message) => {
        console.log("Response from client: ", message);
        messages.push(message); 
        // socket.broadcast.emit("message", message);
        io.sockets.emit("message", message);
    })

    socket.on("loggedInUser", (loggedInUser) => {
        console.log("Response from client: ", loggedInUser);
        users.push(loggedInUser);
      
        // socket.broadcast.emit("loggedInUser", loggedInUser);
        io.sockets.emit("loggedInUser", users);
    })

    // socket.send(socket.id);

    // socket.on('disconnect', function () {
    //     console.log('client disconnected' + socket.id);
    //     //console.log(users);
        
    //     let disconnectUserSocketId = socket.send(socket.id);
    //     let disconnectUser =  users.filter((user) => {return String(user.socketId) !== String(disconnectUserSocketId);});
    //     //console.log(disconnectUser);
    //     io.sockets.emit("loggedInUser", disconnectUser);
    // });

});

// Listening on Port 
http.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
});