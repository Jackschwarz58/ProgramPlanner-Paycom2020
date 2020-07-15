import React, { Component } from "react";
import NavBar from "./Navbar/navbar";
import CardContainer from "./CardContainer/cardContainer";
import SideBar from "./Sidebar/sidebar";
import store from "../store/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"; //To connect to other pages in the app
import {
  getUserSessions,
  getAllSessions,
  addSession,
  editSession,
  deleteSession,
  checkLogin,
  updateLogin,
} from "../helper";

class DashboardApp extends Component {
  state = { error: null, sessions: [], toLogin: false, showModal: false };

  componentDidMount() {
    getAllSessions();
    checkLogin()
      .then((status) => {
        if (status === 201) {
          this.updateSessionData();
        } else {
          this.setState({ toLogin: true }); //Set redirect flag
        }
      })
      .catch((e) => {
        this.setState({ error: e }, () => {
          window.alert(e + " \n" + e.response.statusText);
        });
      });
  }

  updateSessionData = () => {
    getUserSessions()
      .then(({ data }) => {
        if (!data.length == 0) {
          data.sort((a, b) => (a.sessionTime > b.sessionTime ? 1 : -1));
        }
        this.setState({ sessions: data });
      })
      .catch((e) => {
        this.setState({ error: e }, () => {
          window.alert(e);
        });
      });
  };

  handleDelete = (id) => {
    deleteSession(id)
      .then(() => {
        this.updateSessionData();
      })
      .catch((e) => {
        this.setState({ error: e }, () => {
          window.alert(e + " \n" + e.response.statusText);
        });
      });
  };

  handleNewSession = () => {
    addSession()
      .then(() => {
        this.updateSessionData();
      })
      .catch((e) => {
        this.setState({ error: e }, () => {
          window.alert(e + " \n" + e.response.statusText);
        });
      });
  };

  handleEdit = (id) => {
    const sessionToEdit = this.state.sessions.find((s) => {
      return s.sessionId === id;
    });

    editSession(sessionToEdit).catch((e) => {
      this.setState({ error: e }, () => {
        window.alert(e + " \n" + e.response.statusText);
      });
    });
  };

  handleFieldChange = (e, id) => {
    const { name, value } = e.target;

    const index = this.state.sessions.findIndex((s) => {
      return s.sessionId === id;
    });

    const sessions = [...this.state.sessions];
    const item = {
      ...sessions[index],
      [name]: value,
    };

    sessions[index] = item;
    this.setState({ sessions });
  };

  handleLogout = () => {
    updateLogin("LOGOUT", {})
      .then(({ status, statusText }) => {
        if (status === 203) {
          this.setState({ toLogin: true }); //Set redirect flag
        } else {
          window.alert(
            "Something Went Wrong :(\n" + status + " \n" + statusText
          );
        }
      })
      .catch((e) => {
        this.setState({ error: e }, () => {
          window.alert(e + " \n" + e.response.statusText);
        });
      });
  };

  handleDateChange = (dateVal, id) => {
    console.log(dateVal.getTime() / 1000);
    const index = this.state.sessions.findIndex((s) => {
      return s.sessionId === id;
    });

    const sessions = [...this.state.sessions];
    const item = {
      ...sessions[index],
      sessionTime: dateVal.getTime(),
    };
    sessions[index] = item;
    this.setState({ sessions });
  };

  handleJoinSession = (id) => {
    console.log("Session Selected: " + id);
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
              onDateChange={this.handleDateChange}
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
