import React, { Component } from 'react';
import ChatChild from './ChatChild';
import UsersChild from './UsersChild';

class ChatChildContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let messages=this.props.messages;
        let users=this.props.users;
        return (
            <div className="main">
                <div className="main__users">
                    <div className="main__users-online">
                        <h1 className="main__users-heading">Currently Online</h1>
                        <div className="main__users-messages">
                            { users.map((user, index) => {
                                return <UsersChild 
                                    key={index}
                                    loggedInUser={user.userName}
                                />
                                })
                            }
                        </div>
                    </div>
                    <div className="main__users-chatroom">            
                        <div>Chat Room</div>
                        <div>
                            { messages.map((msg, index) => {
                                return <ChatChild 
                                    key={index}
                                    userName={msg.userName}
                                    message={msg.message}
                            />
                            })}
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default ChatChildContainer;
