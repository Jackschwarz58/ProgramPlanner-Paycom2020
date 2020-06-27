import React, { Component } from "react";
import NavBar from "./components/navbar";
import CardContainer from "./components/cardContainer";
import SideBar from "./components/sidebar";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

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
    ],
    sessions: [
      {
        id: 1,
        title: "Technology and You",
        dateTime: "Monday June 29, 2020 at 7:50 PM",
        desc: "This is an example session. This should be the first one",
        attendeeCount: 14,
      },
      {
        id: 2,
        title: "Software Development Meeting",
        dateTime: "Monday June 25, 2020 at 12:50 AM",
        desc: "This is an example session. This should be the second one",
        attendeeCount: 149,
      },
      {
        id: 3,
        title: "Clean Code Book Review: Chpt 5-7",
        dateTime: "Wednesday June 27, 2020 at 12:50 AM",
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
      dateTime: "Date",
      desc: "Description",
      attendeeCount: "##",
    };
    sessions.unshift(newSession);
    this.setState({ sessions });
  };

  handleEdit = (sessionId) => {
    const sessions = this.state.sessions;
    const sessionToEdit = sessions.find((s) => s.id === sessionId);
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
            onEdit={this.handleEdit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
