import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    users: [
      {
        id: "0000001",
        name: "Jack Schwarz",
        userName: "Jack58",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.users[0]} />
      </React.Fragment>
    );
  }
}

export default App;
