import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class SessionCard extends Component {
  state = { editing: false, startDate: new Date() };

  constructor() {
    super();

    this.handleDateChange = this.handleDateChange.bind(this);
    this.buildDateEditField = this.buildDateEditField.bind(this);
    this.buildTitleEditField = this.buildTitleEditField.bind(this);
    this.buildDescEditField = this.buildDescEditField.bind(this);
    this.buildAttendeeEditField = this.buildAttendeeEditField.bind(this);
  }

  render() {
    const {
      id,
      title,
      dateTime,
      desc,
      attendeeCount,
      onDelete,
      //onEdit,
    } = this.props;

    return (
      <div className="container bg-light my-4 p-3 rounded shadow-sm" id={id}>
        <div className="row">
          <div className="col col-10">
            <span>
              <h2>
                {!this.state.editing ? (
                  <span>{title}</span>
                ) : (
                  this.buildTitleEditField()
                )}
              </h2>
            </span>
            <h5 className="text-secondary">
              <span>
                {!this.state.editing ? (
                  <span>{dateTime}</span>
                ) : (
                  this.buildDateEditField()
                )}
              </span>
            </h5>
            <p className="mt-4">
              <span>
                {!this.state.editing ? (
                  <span>{desc}</span>
                ) : (
                  this.buildDescEditField()
                )}
              </span>
            </p>
            <span className="mt-4 text-muted font-italic">
              Attendees:{" "}
              <span>
                {!this.state.editing ? (
                  <span>{attendeeCount}</span>
                ) : (
                  this.buildAttendeeEditField()
                )}
              </span>
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
    this.setState({ startDate: this.state.startDate });
  }

  buildDateEditField() {
    return (
      <DatePicker
        className="edit-field"
        selected={this.state.startDate}
        onChange={this.handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="EEEE MMMM d, yyyy 'at' h:mma"
      />
    );
  }
  buildTitleEditField() {
    return (
      <input
        className="edit-field"
        id="card-edit-field"
        type="text"
        defaultValue={this.props.title}
        placeholder="Session Title"
      />
    );
  }

  buildDescEditField() {
    return (
      <textarea
        className="edit-field"
        id="card-desc-edit-field"
        type="text"
        placeholder="Session Description"
        defaultValue={this.props.desc}
      ></textarea>
    );
  }

  buildAttendeeEditField() {
    return (
      <input
        className="edit-field"
        id="card-attendee-edit-field"
        type="number"
        defaultValue={this.props.attendeeCount}
      />
    );
  }
}

export default SessionCard;
