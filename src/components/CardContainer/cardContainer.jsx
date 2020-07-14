import React, { Component } from "react";
import SessionCard from "../SessionCard/sessionCard"; //Session card objects
import "./cardContainer.css"; //Styling

//Holds all of the session cards and sets them up within the dashboard
class CardContainer extends Component {
  render() {
    const { sessions, onDelete, onEdit, handleFieldChange } = this.props; //To avoid repeated code
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
            handleFieldChange={handleFieldChange}
            isEditing={
              session.hasOwnProperty("isEditing") ? session.isEditing : false
            }
          />
        ))}
      </div>
    );
  }
}

export default CardContainer;
