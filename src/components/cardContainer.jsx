import React, { Component } from "react";
import SessionCard from "./sessionCard";

class CardContainer extends Component {
  state = {};
  render() {
    const { sessionCards } = this.props;
    return (
      <div>
        {sessionCards.map((sessionCard) => (
          <SessionCard
            key={sessionCard.id}
            title={sessionCard.title}
            date={sessionCard.title}
            desc={sessionCard.desc}
            attendeeCount={sessionCard.attendeeCount}
          ></SessionCard>
        ))}
      </div>
    );
  }
}

export default CardContainer;
