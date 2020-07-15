import React, { Component } from "react";
import SessionCard from "../SessionCard/sessionCard"; //Session card objects
import "./cardContainer.css"; //Styling

//Holds all of the session cards and sets them up within the dashboard
class CardContainer extends Component {
  render() {
    const { sessions, onDelete, onEdit, onFieldChange } = this.props; //To avoid repeated code

    if (sessions.length === 0) {
      return (
        <div className="text-secondary text-center" id="card-container">
          Looks Like You Have a Clear Schedule!
        </div>
      );
    } else {
      return (
        <div id="card-container">
          {sessions.map((session) => (
            //All of these are the attributes used in a session card and all of them are different depending on the session information
            <SessionCard
              key={session.sessionId}
              id={session.sessionId}
              title={session.sessionName}
              dateTime={session.sessionTime}
              desc={session.sessionDesc}
              attendeeCount={session.sessionAttendees}
              onDelete={onDelete}
              onEdit={onEdit}
              onFieldChange={onFieldChange}
            />
          ))}
        </div>
      );
    }
  }
}

export default CardContainer;
