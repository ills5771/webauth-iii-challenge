import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    return (
      <>
        <header style={{ marginBottom: "5%" }}>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Sign up</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/users" component={UsersList} />
        </main>
      </>
    );
  }
  logout = () => {
    localStorage.removeItem("token");
  };
}

function Home(props) {
  return <h1>Welcome to Web Auth Challenge</h1>;
}

export default App;
