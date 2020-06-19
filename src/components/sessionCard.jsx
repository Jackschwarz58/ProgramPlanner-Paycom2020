import React, { Component } from "react";

class SessionCard extends Component {
  state = {};
  render() {
    return (
      <div className="container bg-light my-3 p-3 rounded shadow-sm">
        <div className="row">
          <div className="col col-11">Content</div>
          <div className="col col-1">Buttons</div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
