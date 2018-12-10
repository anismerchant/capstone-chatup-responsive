import React, { Component } from 'react';
import ChatChild from './ChatChild';
import UsersChild from './UsersChild';
import Header from './Header';

class ChatChildContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let messages=this.props.messages;
        let users=this.props.users;
        return (
            <div className="main__chatbox--container">
                <Header />
                <div className="main__users">
                    <div className="main__users-online-section">
                        <h1 className="main__users-heading"><span>CURRENTLY ONLINE</span></h1>
                        <div className="main__users--currently-online">
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
                        <h1 className="main__users-chatroom-heading"><span>PUBLIC CHAT ROOM</span></h1>
                       
                            { messages.map((msg, index) => {
                                return <ChatChild 
                                    key={index}
                                    userName={msg.userName}
                                    message={msg.message}
                                    className={(index % 2 === 0) ? "white" : "teal"}
                            />
                            })}
                       
                    </div>
                </div> 
            </div>
        );
    }
}

export default ChatChildContainer;
