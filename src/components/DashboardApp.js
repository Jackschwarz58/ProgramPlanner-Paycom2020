import React, { Component } from "react";
import NavBar from "./Navbar/navbar";
import CardContainer from "./CardContainer/cardContainer";
import SideBar from "./Sidebar/sidebar";
import store from "../store/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"; //To connect to other pages in the app
import {
  getUserSessions,
  addSession,
  addRelationship,
  editSession,
  deleteSession,
  checkLogin,
  updateLogin,
} from "../helper";

class DashboardApp extends Component {
  state = { sessions: [], toLogin: false, showModal: false };

  componentDidMount() {
    checkLogin().then((status) => {
      if (status === 201) {
        this.updateSessionData();
      } else {
        this.setState({ toLogin: true }); //Set redirect flag
      }
    });
  }

  updateSessionData = () => {
    getUserSessions().then(({ data }) => {
      if (!data.length == 0) {
        data.sort((a, b) => (a.sessionTime > b.sessionTime ? 1 : -1));
      }
      this.setState({ sessions: data });
    });
  };

  handleDelete = (id) => {
    deleteSession(id).then(() => {
      this.updateSessionData();
    });
  };

  handleNewSession = () => {
    addSession().then(() => {
      this.updateSessionData();
    });
  };

  handleEdit = (id) => {
    const sessionToEdit = this.state.sessions.find((s) => {
      return s.sessionId === id;
    });

    editSession(sessionToEdit);
  };

  handleLogout = () => {
    updateLogin("LOGOUT", {}).then(({ status, statusText }) => {
      if (status === 203) {
        this.setState({ toLogin: true }); //Set redirect flag
      } else {
        window.alert("Something Went Wrong :(\n" + status + " \n" + statusText);
      }
    });
  };

  handleJoinSession = (id) => {
    addRelationship(id).then(() => {
      this.updateSessionData();
    });
  };

  handleFieldChange = (e, id) => {
    const index = this.state.sessions.findIndex((s) => {
      return s.sessionId === id;
    });

    const sessions = [...this.state.sessions];
    var item;

    if (e instanceof Date) {
      item = {
        ...sessions[index],
        sessionTime: e.getTime(),
      };
    } else {
      item = {
        ...sessions[index],
        [e.target.name]: e.target.value,
      };
    }

    sessions[index] = item;
    this.setState({ sessions });
  };

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/index" />;
    } else {
      return (
        <React.Fragment>
          <SideBar
            sessions={this.state.sessions}
            onLogout={this.handleLogout}
          />
          <div id="wrapper">
            <NavBar
              user={store.getState()}
              onAdd={this.handleNewSession}
              onJoinSession={this.handleJoinSession}
            />
            <CardContainer
              sessions={this.state.sessions}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
              onFieldChange={this.handleFieldChange}
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DashboardApp);
