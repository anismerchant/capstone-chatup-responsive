import React, { Component } from 'react';

class ChatChild extends Component {
    render() {
        return (
                <div className={`main__users-chatroom-participant ${this.props.className}`}>
                    <h6 className="main-area__user-name">{this.props.userName}</h6>
                    <h6 className="main-area__user-message">{this.props.message}</h6>
                </div>
           
        );
    }
 
}

export default ChatChild;