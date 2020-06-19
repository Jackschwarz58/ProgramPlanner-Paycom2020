import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class SessionCard extends Component {
  state = {};
  render() {
    return (
      <div className="container bg-light my-4 p-3 rounded shadow">
        <div className="row">
          <div className="col col-10">
            <h2>Online Learning Book Discussion</h2>
            <h5 className="text-secondary">Monday June 22, 2020 at 11:30am</h5>
            <p className="mt-4">
              This is where a description goes and you know you'll like it when
              you see it! Wow this is getting pretty long if you ask me. Maybe I
              should drop in some Latin for good mesaure. Lorem ipsum dolor sit
              amet, consectetur adipiscin- you know what? Nevermind. Lets just
              pad this out a bit to get another line wrapped to make sure. Such
              a pretty house and such a pretty garden. No alarms and No suprises
              please.
            </p>
            <span className="mt-4 text-muted font-italic">Attendees: 12</span>
          </div>
          <div className="col col-2 text-secondary">
            <div>
              <button
                type="button"
                className="btn btn-light float-right text-danger"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button type="button" className="btn btn-light float-right">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionCard;
