import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="main__login--logo-container">
                <h1 className="main__login--logo-text">CHATUP</h1>
                <h2 className="main__login--logo-text-handle">Join the conversation</h2>
            </div>
        )
    }
}

export default Header;