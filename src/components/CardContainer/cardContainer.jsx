import React, { Component } from "react";
import SessionCard from "../SessionCard/sessionCard"; //Session card objects
import "./cardContainer.css"; //Styling

//Holds all of the session cards and sets them up within the dashboard
class CardContainer extends Component {
  render() {
    const { sessionCards, onDelete, onEdit } = this.props; //To avoid repeated code
    return (
      <div id="card-container">
        {sessionCards.map((sessionCard) => (
          //All of these are the attributes used in a session card and all of them are different depending on the session information
          <SessionCard
            key={sessionCard.id}
            id={sessionCard.id}
            title={sessionCard.title}
            dateTime={sessionCard.dateTime}
            desc={sessionCard.desc}
            attendeeCount={sessionCard.attendeeCount}
            onDelete={onDelete}
            onEdit={onEdit}
          ></SessionCard>
        ))}
      </div>
    );
  }
}

export default CardContainer;
