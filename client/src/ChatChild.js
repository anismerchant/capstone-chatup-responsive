import React, { Component } from 'react';

class ChatChild extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <h6 className="main-area__useronline">{this.props.userName}</h6>
                    <h6 className="main-area__useronline">{this.props.message}</h6>
                </div>
           
        );
    }
 
}

export default ChatChild;