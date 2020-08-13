import React, { Component } from "react";
import "./sidebar.css"; //Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //Needed for icons
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; //For nice buttons

// This code is looking good. It's another example of a class that could be converted into a functional component. 
// Not necessary of course, but functional components are preferred in React when possible.

//Sidebar on the Dashboard page that displays the brand logo (defined below), the event title, and a list of user sessions ordered by time from the current time.
class SideBar extends Component {
  //Builds a list of upcoming sessions sorted by date that a user can see. When clicked, it scrolls to that event on the page
  buildSessionsList = () => {
    if (!this.props.sessions.length == 0) {
      return this.props.sessions
        .filter((session) => session.sessionTime > Date.now()) //This makes sure only upcoming sessions are shown
        .map((session) => (
          <li className="session-list-item rounded" key={session.sessionId}>
            <a
              className="w-100 text-left full-width"
              href={"#" + session.sessionId}
            >
              {session.sessionName}
            </a>
          </li>
        ));
    } else {
      return <span>No Upcoming Sessions!</span>; //If there are no Sessions, little text blurb
    }
  };

  render() {
    return (
      //Makes heavy use of bootstrap classes
      <nav id="sidebar">
        <div className="sidebar-header">
          <div id="sidebar-black-layer">
            <div className="p-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="sidebar-img rounded-circle"
                src={`/paycomProject/assets/img/brand-logo.jpg`} //This should be customizable by an admin but right now it is not
                height="133px"
                width="133px"
                alt="???"
                loading="lazy"
              />
              <div>
                <h6 className="mt-1">Paycom Summer Engagement Program</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="p-3 text-center" id="sidebar-session-header">
            Upcoming Sessions
          </h6>
          <ul id="upcoming-session-list">
            {/*This just Maps the defined sessions into a list that is set with a styling class and key*/}
            {this.buildSessionsList()}
          </ul>
          <div id="btm-container">
            <button
              className="w-100 text-left rounded"
              id="signout-btn"
              onClick={this.props.onLogout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              &nbsp;Sign Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default SideBar;
