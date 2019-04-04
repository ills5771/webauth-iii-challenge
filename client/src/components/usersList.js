import React from "react";
import axios from "axios";

class UsersList extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    axios.get("http://localhost:5000/api/users", requestOptions).then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Users List</h1>
        {this.state.users.map(user => (
          <p>{user.username}</p>
        ))}
      </div>
    );
  }
}

export default UsersList;
