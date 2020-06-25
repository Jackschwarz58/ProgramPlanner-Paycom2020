import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class SessionCard extends Component {
  state = { editing: false, startDate: new Date() };

  constructor() {
    super();
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  render() {
    const { id, title, date, desc, attendeeCount, onDelete } = this.props;

    return (
      <div className="container bg-light my-4 p-3 rounded shadow-sm">
        <div className="row">
          <div className="col col-10">
            <span>
              <h2>
                {!this.state.editing ? (
                  <span>{title}</span>
                ) : (
                  <input
                    className="card-edit-field"
                    type="text"
                    defaultValue={title}
                    placeholder="Session Title"
                    ref={(node) => {
                      this.newTitle = node;
                    }}
                  />
                )}
              </h2>
            </span>
            <h5 className="text-secondary">
              <span>
                {!this.state.editing ? (
                  <span>{date}</span>
                ) : (
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                )}
              </span>
            </h5>
            <p className="mt-4">
              <span>{desc}</span>
            </p>
            <span className="mt-4 text-muted font-italic">
              Attendees: <span>{attendeeCount}</span>
            </span>
          </div>
          <div className="col col-2 text-secondary">
            <div>
              <button
                type="button"
                className="btn btn-light float-right text-danger"
                onClick={() => {
                  window.confirm("Is it okay to delete the session?") &&
                    onDelete(id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                type="button"
                className="btn btn-light float-right"
                onClick={() => {
                  this.setState({ editing: !this.state.editing });
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleDateChange() {
    console.log(this.state);
    this.setState({ startDate: this.state.startDate });
  }
}

export default SessionCard;
