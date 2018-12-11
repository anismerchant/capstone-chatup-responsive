import React, { Component } from 'react';
import io from 'socket.io-client';

import ChatChildContainer from './ChatChildContainer';
import Login from './Login';

//const io = require('socket.io-client');
let socket = io.connect(`http://localhost:8080`);
let time = new Date().getTime();

class Main extends Component {
  constructor(props) {
    super(props);

    // Creating a 'ref' for message input and storing
    // it in 'this', which is the instance that's created.
    this.messageInput = React.createRef();

    this.state = {
      url: "http://localhost:8080",
      messages: [],
      userName: "",
      users:[],
      showLogin: true,
    }
  }

  componentDidMount() {
    this.initSocket();

    this.io.on("message", (data) => {
      console.log("Incoming username from other user: " + data.userName);
      console.log("Incoming Message from other user: " + data.msg);
      console.log("Incoming timestamp from other user: " + data.timeStamp);
      console.log("Incoming SocketId from other user: " + data.socketId);
      this.addMessages(data);
    })

    this.io.on("loggedInUser", (data) => {
      console.log("Incoming username from other user: " + data.userName);
      this.allLoggedInUser(data);
    })
  }

  componentWillUnMount() {
    socket.disconnect();  
}

  addMessages = (data) => {
  
    let newMsg = {userName: data.userName, message: data.msg, timeStamp: data.timeStamp, socketId: data.socketId};
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMsg]}
    ))
  }

  initSocket() {
    this.io = io(this.state.url);
  }

  //1. User enters chatroom
  sendMessage = (e) => {
    e.preventDefault();
    let userInput = this.messageInput.current.value;
    if ((this.messageInput.current.value).trim() === '' || (this.messageInput.current.value).trim() === null || this.messageInput.current.value === ' ' ) {
      alert("Pleae enter a message...");
      return;
    } else {
      socket.emit("message", {userName: this.state.userName, msg: userInput, timeStamp: time, socketId:socket.id});
      this.messageInput.current.value="";
    }
  }

  //2. Hide login component after user shares name
  hideLogin = () => {
    this.setState({
      showLogin: false
    });
  }

  loggedInUser = (user) => {
    this.setState({userName: user}, () => {
      socket.emit("loggedInUser", {userName: user, socketId:socket.id} )
    });
  }

  allLoggedInUser = (user) => {
    this.setState(() => ({
      users: user}
    ))
  }
  
  render() {
    return (
      <div className="main">
        {this.state.showLogin && <Login hideLogin={this.hideLogin} loggedInUser={this.loggedInUser}/>}
        <ChatChildContainer messages={this.state.messages} users={this.state.users} />
        <div className="main__chatbar--container">
          <form className="main__chatbar-form" onSubmit={this.sendMessage}>
              <input className="main__chatbar--form-input" type="text" placeholder="Start chatting..." ref={this.messageInput}/>
              <button className="main__chatbar--form-msg-submit" type="submit">SEND</button> 
          </form>
        </div>
      </div>
    );
  }
}

export default Main;