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
          {/* <Route path="/users" component={UsersList} /> */}
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
// state = {
//   users: [],
//   username: "",
//   password: "",
//   depts: ""
// };
// componentDidMount() {
//   axios.get("http://localhost:6000/api/users").then(res => {
//     this.setState({
//       users: res.data
//     });
//   });
// }
// inputChange = ev => {
//   this.setState({
//     [ev.target.name]: ev.target.value
//   });
// };
// registerUser = ev => {
//   ev.preventDefault();
//   const newUser = {
//     username: this.state.username,
//     password: this.state.password,
//     depts: this.state.depts
//   };
//   axios.post("http://localhost:6000/api/auth/register", newUser).then(res => {
//     console.log(res.data);
//     this.setState({
//       users: res.data,
//       username: "",
//       password: "",
//       depts: ""
//     });
//   });
// };

//   render() {
//     return (
//       <div className="App">
//         <h1>welcome!</h1>
//         {this.state.users.map(user => (
//           <p>{user.username}</p>
//         ))}
//         <SignUp
//           depts={this.state.depts}
//           username={this.state.username}
//           password={this.state.password}
//           registerUser={this.registerUser}
//           inputChange={this.inputChange}
//         />
//       </div>
//     );
//   }
// }
