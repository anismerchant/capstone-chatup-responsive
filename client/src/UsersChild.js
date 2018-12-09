import React, { Component } from 'react';

class UsersChild extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h6 className="main-area__usernames">{this.props.loggedInUser}</h6>
            </div>
            
        );
    }
 
}

export default UsersChild;