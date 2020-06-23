import React, { Component } from "react";
import SessionCard from "./sessionCard";

class CardContainer extends Component {
  state = {};
  render() {
    const { sessionCards, onDelete } = this.props;
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
          ></SessionCard>
        ))}
      </div>
    );
  }
}

export default CardContainer;
