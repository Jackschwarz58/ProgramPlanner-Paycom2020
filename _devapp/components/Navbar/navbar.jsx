/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For nice glyphs on the buttons
import { faCalendar, faCalendarPlus } from "@fortawesome/free-solid-svg-icons"; //Add session button
import "./navbar.css"; //Styling
// ^ Using JSS is a cool alternative to CSS. You are able to contain the styles and jsx code
// in a single file, and you don't have to worry about classes for styling. Probably a bit
// beyond the scope for a summer program, though.
import { getAllSessions } from "../../helper"; //To create the join existing session menu dropdown
import { format } from "date-fns"; //Nicer Date formatting. Didn't want to use Moment, wayy to big

//The top bar on the component page. This is where users can log out or add a session. This bar also contains the user name and a template photo for the user.
class NavBar extends Component {
  state = { sessionList: [] }; //This is for the join exisiting sessions menu option
  constructor() {
    super();
    this.buildExistingSessions = this.buildExistingSessions.bind(this);
  }

  //Pulls current sessions list for menu dropdown
  componentDidMount() {
    getAllSessions().then(({ data }) => {
      this.setState({ sessionList: data });
    });
  }

  //Dropdown menu to select a session to be added to. This just pulls the session list from SQL and formats it nice
  buildExistingSessions() {
    if (this.state.sessionList.length > 0) {
      return (
        <div //I prefer to use bootstrap classes than import it as it helps with build size
          className="dropdown-menu scrollable-menu"
          aria-labelledby="navbarDropdownMenuLink"
        >
          {this.state.sessionList.map((session) => (
            <a
              className="dropdown-item pt-3 session-selector"
              key={session.sessionId}
              onClick={() => this.props.onJoinSession(session.sessionId)} //If the user selects a session, calls update API
            >
              <h6>{session.sessionName}</h6>
              <p className="small-font">
                {format(session.sessionTime, "eeee MMMM do, yyyy 'at' h:mmaaa")}
              </p>
            </a>
          ))}
        </div>
      );
    } else {
      return (
        <div //I prefer to use bootstrap classes than import it as it helps with build size
          className="dropdown-menu scrollable-menu"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <span className="dropdown-item pt-3">No Existing Sessions!</span>
        </div>
      );
    }
  }

  render() {
    const { user, onAdd } = this.props; //To avoid repeated code

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light shadow-sm "
          id="top-bar"
        >
          {/* Bootstrap Navbar stuff */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse pl-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {" "}
              {/*Simple Bootstrap Navbar list. Looks nice enough */}
              <li className="nav-item">
                <a
                  className="nav-link active nav-action rounded"
                  onClick={() => onAdd()}
                >
                  <FontAwesomeIcon icon={faCalendarPlus} id="nav-icon" />
                  Add New Session
                </a>
              </li>
              <li className="nav-item active dropdown">
                <a
                  className="nav-link dropdown-toggle nav-action rounded"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faCalendar} id="nav-icon" />
                  Join Existing Session
                </a>
                {this.buildExistingSessions()}
              </li>
            </ul>

            <div className="ml-auto rounded pl-2">
              <span className="navbar-brand">
                <img
                  className="rounded-circle"
                  src={`/paycomProject/assets/img/default-profile.jpg`} //I wish this was customizable but I did not think it was a necessity to spend a ton of time on
                  width="38"
                  height="38"
                  alt="??"
                  loading="lazy"
                />
                <span className="text-dark" id="user-name-label">
                  {user.userName} {/*From the defined user in the Redux store*/}
                </span>
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
