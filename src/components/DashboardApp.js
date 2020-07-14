import React, { Component } from "react";
import NavBar from "./Navbar/navbar";
import CardContainer from "./CardContainer/cardContainer";
import SideBar from "./Sidebar/sidebar";
import store from "../store/index";
import { connect } from "react-redux";
import { getSessions, addSession, editSession, deleteSession } from "../helper";

class DashboardApp extends Component {
  state = { error: null, sessions: [] };

  componentDidMount() {
    this.updateSessionData();
  }

  updateSessionData = () => {
    getSessions()
      .then(({ data }) => {
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

  render() {
    return (
      <React.Fragment>
        <SideBar sessions={this.state.sessions} />
        <div id="wrapper">
          <NavBar user={store.getState()} onAdd={this.handleNewSession} />
          <CardContainer
            sessions={this.state.sessions}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            handleFieldChange={this.handleFieldChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DashboardApp);
