import React from "react";
import axios from "axios";

export default class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/login", this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/users");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            type="text"
            placeholder="username"
            name="username"
            onChange={this.inputChange}
          />
          <input
            value={this.state.password}
            type="password"
            placeholder="password"
            name="password"
            onChange={this.inputChange}
          />
          <button type="submit">Sign in</button>
        </form>
      </>
    );
  }
}
