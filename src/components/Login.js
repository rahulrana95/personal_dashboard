import React, { Component } from "react";
import {loginService} from "services/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedin: false };
  }
  render() {
    return (
      <div>
        <div>
            <label>Login </label>
            <input placeholder="username" onChange={this.onUsernameChange}/>
            <input type="password" onChange={this.onPasswordChange}/>
            <button onClick={this.onLoginClick}>Login</button>
        </div>
      </div>
    );
  }

  onUsernameChange = (e) => {
      this.setState({
          username:e.target.value
      })
  }

  onPasswordChange = (e) => {
    this.setState({
        password:e.target.value
    })
  }

  onLoginClick = async () => {
      await loginService(this.state.username, this.state.password);

  }
}

export default Login;
