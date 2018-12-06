import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main__users">
          <div className="main__users-online">Currently Online</div>
          <div className="main__users-chatroom">Chat Room</div>
        </div>
        <form className="main__chatbar-form">
            <input className="main__chatbar--form-input" type="text" placeholder="Start chatting..."/>
            <button className="main__chatbar--form-msg-submit" type="submit">SEND</button>
        </form> 
      </div>
    );
  }
}

export default Main;