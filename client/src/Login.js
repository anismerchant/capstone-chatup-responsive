import React, { Component } from 'react';

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
                <div className="main__login--area">
                    <input className="main__login--name-input"
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder=" Your name..."
                        ref={input => {this.usernameInput = input}}
                    />
                    {/* <input
                        type="password"
                        className="form-control"
                        onChange={this.handlerPasswordChange.bind(this)}
                        ref={this.userpasswordInput}
                    /> */}
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={this.submitHandler.bind(this)}
                    >Login</button>
                </div>
            </div>
        );
    }
  }

  export default Login;