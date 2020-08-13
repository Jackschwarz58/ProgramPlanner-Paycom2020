import React, { Component } from "react";
//Components
import NavBar from "./Navbar/navbar";
import CardContainer from "./CardContainer/cardContainer";
import SideBar from "./Sidebar/sidebar";
//Redux Related
import store from "../store/index";
import { connect } from "react-redux"; //Used to store user data
//To connect to other pages in the app through routes
import { Redirect } from "react-router-dom";
//All of these are for the purpose of seperating API calls into a seperate file
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
  state = { sessions: [], toLogin: false }; //Flags for login redirect and session list

  //This checks to ensure user is logged in to access the dashboard view
  componentDidMount() {
    checkLogin().then((status) => {
      if (status === 201) {
        this.updateSessionData(); //If so, get sessions for user
      } else {
        this.setState({ toLogin: true }); //Set redirect flag
      }
    });
  }

  //This pulls new session data for the user and sorts it by time
  updateSessionData = () => {
    getUserSessions().then(({ data }) => {
      if (!data.length == 0) {
        data.sort((a, b) => (a.sessionTime > b.sessionTime ? 1 : -1));
      }
      this.setState({ sessions: data });
    });
  };

  //Calls the POST request to remove the relationship between the user and session
  handleDelete = (id) => {
    deleteSession(id).then(() => {
      this.updateSessionData();
    });
  };

  //Calls the helper method to create a new session object and call the APi to add it to the database
  handleNewSession = () => {
    addSession().then(() => {
      this.updateSessionData();
    });
  };

  //Pulls session object to be edited based on ID and pushes the object to the helper function.
  //As states are updated along the way, the data is already changed correctly
  handleEdit = (id) => {
    const sessionToEdit = this.state.sessions.find((s) => {
      return s.sessionId === id;
    });
    editSession(sessionToEdit);
  };

  //Calls logout helper and then sets redirect if everything is okay
  //If another status occurs, a message is displayed. This may happen if a user is accidentally on this page with no user data.
  //Should never happen and I havent seen it, but just in case
  handleLogout = () => {
    updateLogin("LOGOUT", {}).then(({ status, statusText }) => {
      if (status === 203) {
        this.setState({ toLogin: true }); //Set redirect flag
      } else {
        window.alert("Something Went Wrong :(\n" + status + " \n" + statusText);
      }
    });
  };

  //Calls helper function to create relationship between user and specified session chosen in Navbar
  handleJoinSession = (id) => {
    addRelationship(id).then(() => {
      this.updateSessionData();
    });
  };

  //Updates the session's state with the edited data so it is always up to date
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
    //If flag is set, kick back to login page
    if (this.state.toLogin === true) {
      return <Redirect to="/index" />;
    } else {
      return (
        <React.Fragment>
          <SideBar
            sessions={this.state.sessions}
            onLogout={this.handleLogout}
          />
          {/*The Main Page view*/}
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

// Nice, I like Redux. 
//This is for Redux store access
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DashboardApp);
