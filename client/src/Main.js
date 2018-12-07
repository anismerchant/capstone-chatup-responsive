import React, { Component } from 'react';
import io from 'socket.io-client';

let socket = io(`http://localhost:8080`);

class Main extends Component {
  constructor(props) {
    super(props);

    // Creating a 'ref' for message input and storing
    // it in 'this', which is the instance that's created.
    this.messageInput = React.createRef();
  
    this.state = {
      url: "http://localhost:8080",
      messages: [],
      username: "",
      showLogin: true,
    }
  }

  initSocket() {
    this.io = io(this.state.url);
  }

  sendMessage = (e) => {
    e.preventDefault();
    let userInput = this.messageInput.current.value;
    socket.emit("message", userInput);
  }

  addMessageToGroup = (msg) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, msg]}
    ))
  }
  
  componentDidMount() {
    this.initSocket();

    // Message from other users
    this.io.on("message", (msg) => {
      // console.log("Incoming Message from other user: " + msg);
      this.addMessageToGroup(msg);
    })

  }
  
  render() {
    return (
      <div className="main">
        <div className="main__users">
          <div className="main__users-online">
            <h1 className="main__users-heading">Currently Online</h1>
            <div className="main__users-messages"></div>
          </div>
          <div className="main__users-chatroom">Chat Room</div>
        </div>
        <form className="main__chatbar-form" onClick={this.sendMessage}>
            <input className="main__chatbar--name-input" type="text" placeholder="Your name..."/>
            <input className="main__chatbar--form-input" type="text" placeholder="Start chatting..." ref={this.messageInput}/>
        </form>
        <button className="main__chatbar--form-msg-submit" type="submit">SEND</button> 
      </div>
    );
  }
}

export default Main;