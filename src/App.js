import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import CardContainer from "./components/cardContainer";

class App extends Component {
  state = {
    users: [
      {
        id: "1",
        name: "Jack Schwarz",
        userName: "Jack58",
      },
      {
        id: "2",
        name: "Sydney Schwarz",
        userName: "SydneySchwarz58",
      },
      {
        id: "3",
        name: "Connor Sharp",
        userName: "LookinSharp720",
      },
    ],
    sessions: [
      {
        id: 1,
        title: "Example Session Title 1",
        date: "Monday June 29, 2020 at 7:50pm",
        time: "",
        desc: "This is an example session. This should be the first one",
        attendeeCount: 14,
      },
      {
        id: 2,
        title: "Example Session Title 2",
        date: "Monday June 25, 2020 at 12:50am",
        time: "",
        desc: "This is an example session. This should be the second one",
        attendeeCount: 149,
      },
      {
        id: 3,
        title: "Example Session Title 3",
        date: "Wednesday June 27, 2020 at 12:50am",
        time: "",
        desc: "This is an example session. This should be the third one",
        attendeeCount: 85,
      },
    ],
  };

  handleDelete = (sessionId) => {
    console.log(sessionId);
    const sessions = this.state.sessions.filter((s) => s.id !== sessionId);
    console.log(sessions);
    this.setState({ sessions });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.users[0]} />
        <CardContainer
          sessionCards={this.state.sessions}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
