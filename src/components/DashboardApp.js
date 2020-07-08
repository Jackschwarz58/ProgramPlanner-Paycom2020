import React, { Component } from "react";
import NavBar from "./Navbar/navbar";
import CardContainer from "./CardContainer/cardContainer";
import SideBar from "./Sidebar/sidebar";

class DashboardApp extends Component {
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
      {
        id: 4,
        title: "Worst Coding Practices",
        dateTime: "Monday June 29, 2020 at 7:50 PM",
        desc: "This is an example session. This should be the first one",
        attendeeCount: 34,
      },
      {
        id: 5,
        title: "OAuth Info Session",
        dateTime: "Monday June 25, 2020 at 12:50 AM",
        desc: "This is an example session. This should be the second one",
        attendeeCount: 19,
      },
      {
        id: 6,
        title: "React for Dummies",
        dateTime: "Wednesday June 27, 2020 at 12:50 AM",
        desc: "This is an example session. This should be the third one",
        attendeeCount: 93,
      },
      {
        id: 7,
        title: "Avengers Movie Marathon",
        dateTime: "Monday June 29, 2020 at 7:50 PM",
        desc: "This is an example session. This should be the first one",
        attendeeCount: 55,
      },
      {
        id: 8,
        title: "Privacy Policies and Cookies",
        dateTime: "Monday June 25, 2020 at 12:50 AM",
        desc: "This is an example session. This should be the second one",
        attendeeCount: 1,
      },
      {
        id: 9,
        title: "How to Edit VIM 101",
        dateTime: "Wednesday June 27, 2020 at 12:50 AM",
        desc: "This is an example session. This should be the third one",
        attendeeCount: 190,
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
        <SideBar sessions={this.state.sessions} />
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

export default DashboardApp;
