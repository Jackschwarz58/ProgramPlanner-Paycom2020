import React, { Component } from "react";
import SessionCard from "../SessionCard/sessionCard"; //Session card objects
import "./cardContainer.css"; //Styling

// With React, if we are not using state, we don't have to create classes. From what I am seeing,
// this could be a stateless (functional) component, which reduces overhead. Something like: 

const StatelessCardContainer = ({ sessions, onDelete, onEdit, onFieldChange }) =>
  sessions.length === 0 ? (
    <div className="text-secondary text-center" id="card-container">
      {/*Cheesy little text blurb*/}
      Looks Like You Have a Clear Schedule!
    </div>
  ) : (
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
          onFieldChange={onFieldChange} //This handles both date and field changes
        />
      ))}
    </div>
  );


//Holds all of the session cards and sets them up within the dashboard
class CardContainer extends Component {
  render() {
    const { sessions, onDelete, onEdit, onFieldChange } = this.props; //To avoid repeated code

    if (sessions.length === 0) {
      //If the user hasnt signed up for a session or if they remove themselves from all of them
      return (
        <div className="text-secondary text-center" id="card-container">
          {/*Cheesy little text blurb*/}
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
              onFieldChange={onFieldChange} //This handles both date and field changes
            />
          ))}
        </div>
      );
    }
  }
}

export default CardContainer;
