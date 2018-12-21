import React, { Component } from 'react';

class UsersChild extends Component {
    render() {
        return (
            <h6 className="main__users--usernames"><span>{this.props.loggedInUser}</span></h6>
        );
    }
 
}

export default UsersChild;