import React, { Component } from "react";
import SessionCard from "./sessionCard";

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
            date={sessionCard.date}
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
