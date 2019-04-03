import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    depts: ""
  };
  render() {
    return (
      <div>
        <form>
          <input
            name="username"
            value={this.state.username}
            type="text"
            onChange={this.inputChange}
            placeholder="username"
          />
          <input
            name="password"
            value={this.state.password}
            type="text"
            onChange={this.inputChange}
            placeholder="password"
          />
          <input
            name="depts"
            value={this.state.depts}
            type="text"
            onChange={this.inputChange}
            placeholder="department"
          />
        </form>
      </div>
    );
  }
}
