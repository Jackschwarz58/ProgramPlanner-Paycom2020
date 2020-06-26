import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import CardContainer from "./components/cardContainer";
import SideBar from "./components/sidebar";

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
        title: "Technology and You",
        date: "Monday June 29, 2020 at 7:50 PM",
        time: "",
        desc: "This is an example session. This should be the first one",
        attendeeCount: 14,
      },
      {
        id: 2,
        title: "Software Development Meeting",
        date: "Monday June 25, 2020 at 12:50 AM",
        time: "",
        desc: "This is an example session. This should be the second one",
        attendeeCount: 149,
      },
      {
        id: 3,
        title: "Clean Code Book Review: Chpt 5-7",
        date: "Wednesday June 27, 2020 at 12:50 AM",
        time: "",
        desc: "This is an example session. This should be the third one",
        attendeeCount: 85,
      },
    ],
  };

  handleDelete = (sessionId) => {
    const sessions = this.state.sessions.filter((s) => s.id !== sessionId);
    this.setState({ sessions });
  };

  handleNewSession = () => {
    const sessions = this.state.sessions;
    const newSession = {
      id: this.state.sessions[sessions.length - 1].id + 1,
      title: "Title",
      date: "Date",
      time: "",
      desc: "Description",
      attendeeCount: "##",
    };
    sessions.unshift(newSession);
    this.setState({ sessions });
  };

  render() {
    return (
      <React.Fragment>
        <SideBar />
        <div id="wrapper">
          <NavBar user={this.state.users[0]} onAdd={this.handleNewSession} />
          <CardContainer
            sessionCards={this.state.sessions}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
