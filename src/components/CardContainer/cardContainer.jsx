import React, { Component } from "react";
import SessionCard from "../SessionCard/sessionCard";
import "./cardContainer.css";

class CardContainer extends Component {
  render() {
    const { sessionCards, onDelete, onEdit } = this.props;
    return (
      <div id="card-container">
        {sessionCards.map((sessionCard) => (
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
