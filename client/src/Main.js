import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div>Chatter Connected</div>
        <div>Chat Room</div>
        <div id="chatbar__container">
            <form id="chatbar__container--form">
                <input id="chatbar__container--input" type="text" placeholder="Start chatting..."/>
                <button id="chatbar__container--msg-submit" type="submit">SEND</button>
            </form> 
        </div>
      </div>
    );
  }
}

export default Main;