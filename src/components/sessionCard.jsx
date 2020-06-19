import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class SessionCard extends Component {
  state = {};
  render() {
    const deleteStyle = {
      color: "#EA444A",
    };

    return (
      <div className="container bg-light my-3 p-3 rounded shadow-sm">
        <div className="row">
          <div className="col col-10">
            Content
            <br />
            Content
            <br />
            Content
            <br />
            Content
            <br />
            Content
            <br />
            Content
            <br />
            Content
            <br />
            Content
            <br />
            Content
            <br />
          </div>
          <div className="col col-2 text-secondary">
            <button
              type="button"
              className="btn btn-light float-right"
              style={deleteStyle}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button type="button" className="btn btn-light float-right">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
