import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import CardContainer from "./components/cardContainer";

class App extends Component {
  state = {
    users: [
      {
        id: "0000001",
        name: "Jack Schwarz",
        userName: "Jack58",
      },
    ],
    sessions: [
      {
        id: 1,
        title: "Example Session Title 1",
        date: "Monday June 29, 2020 at 7:50pm",
        desc: "This is an example session. This should be the first one",
        attendeeCount: 14,
      },
      {
        id: 2,
        title: "Example Session Title 2",
        date: "Monday June 25, 2020 at 12:50am",
        desc: "This is an example session. This should be the second one",
        attendeeCount: 149,
      },
      {
        id: 3,
        title: "Example Session Title 3",
        date: "Wednesday June 27, 2020 at 12:50am",
        desc: "This is an example session. This should be the third one",
        attendeeCount: 85,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.users[0]} />
        <CardContainer sessionCards={this.state.sessions} />
      </React.Fragment>
    );
  }
}

export default App;
