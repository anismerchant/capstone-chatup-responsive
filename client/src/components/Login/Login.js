import React, { Component } from 'react';
import Header from '../Header/Header';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
        }
    }
  
    submitHandler() {
      if ((this.usernameInput.value).trim() === '' || (this.usernameInput.value).trim() === null || this.usernameInput.value === ' ' ) {
        alert("Pleae enter your username...");
        return;
      } else {
        this.setState({username: this.usernameInput.value}, () => {
            this.props.hideLogin(); 
            this.props.loggedInUser(this.state.username);
        });
      }
    }
  
    render() {
        return (
            <div className="main__login--containter">
                <div className="main__login--logo-and-form-containers" >
                   <Header />
                    <div className="main__login--form-container">
                        <h2 className="main__login--slogan">Share your ideas. Collaborate on projects. Make stuff that matters...</h2>
                        <form className="main__login--form" onSubmit={this.submitHandler.bind(this)}>
                            <input className="main__login--name-input"
                                name="username"
                                type="text"
                                placeholder="ENTER YOUR NAME"
                                ref={input => {this.usernameInput = input}}
                            />
                            {/* // For future development.
                                <input
                                type="password"
                                className="form-control"
                                onChange={this.handlerPasswordChange.bind(this)}
                                ref={this.userpasswordInput}
                                /> 
                            */}
                            <button
                                type="submit"
                                className="main__login--button"
                            >Join</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
  }

  export default Login;