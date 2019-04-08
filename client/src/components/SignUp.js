import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    depts: ""
  };
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  registerUser = ev => {
    ev.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      depts: this.state.depts
    };
    axios.post("http://localhost:5000/api/auth/register", newUser).then(res => {
      console.log(res.data);
      this.setState({
        users: res.data,
        username: "",
        password: "",
        depts: ""
      });
      this.props.history.push("/login");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.registerUser}>
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
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}
