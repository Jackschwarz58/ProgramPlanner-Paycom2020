import React, { Component } from "react";
import DatePicker from "react-datepicker"; //Used for users to be able to select dates and times easier. Much more user friendly than an input field
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //Needed for icons
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; //For nice buttons
import "./sessionCard.css"; //Styling

class SessionCard extends Component {
  state = { editing: false, startDate: new Date(), sessionId: null }; //Editing flag is used to built editable fields. StartDate needed for datepicker

  constructor() {
    super();

    this.handleDateChange = this.handleDateChange.bind(this);
    this.buildDateEditField = this.buildDateEditField.bind(this);
    this.buildTitleEditField = this.buildTitleEditField.bind(this);
    this.buildDescEditField = this.buildDescEditField.bind(this);
    this.buildAttendeeEditField = this.buildAttendeeEditField.bind(this);
  }

  //Simply keeps the state up to date (no pun intended)
  handleDateChange() {
    this.setState({ startDate: this.state.startDate });
  }

  //The foloowing are all only rendered when the user is editing a session. Since it would have been messy code in if statements in render(), they are seperate funcs. Much easier to read
  buildDateEditField() {
    return (
      <DatePicker //I chose a datepicker component as it was the most user friendly way to pick dates and the react-datepicker package is super well done already.
        className="edit-field"
        selected={this.state.startDate}
        onChange={this.props.handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="EEEE MMMM d, yyyy 'at' h:mma" //Prefered date format
      />
    );
  }
  buildTitleEditField() {
    return (
      <input
        className="edit-field"
        id="card-edit-field"
        type="text"
        name="sessionName"
        defaultValue={this.props.title}
        onChange={(e) => this.props.handleFieldChange(e, this.props.id)}
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
        name="sessionDesc"
        placeholder="Session Description"
        onChange={(e) => this.props.handleFieldChange(e, this.props.id)}
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
        name="sessionAttendees"
        onChange={(e) => this.props.handleFieldChange(e, this.props.id)}
        defaultValue={this.props.attendeeCount}
      />
    );
  }

  render() {
    const {
      id,
      title,
      dateTime,
      desc,
      attendeeCount,
      onDelete,
      onEdit,
    } = this.props; //Avoiding repeated code

    return (
      <div className="container bg-light my-4 p-3 rounded shadow-sm" id={id}>
        <div className="row">
          <div className="col col-10">
            <span>
              <h2>
                {!this.state.editing ? ( //Checks if user is in edit state and, if so, builts the editable fields. Otherwise the basic defined element is rendered.
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
              {/*This really needed a space. Made it easier to read */}
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
                  //As I did not implement an undo button, this is for user safety when deleting a session
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
                  if (this.state.editing) {
                    onEdit(id);
                  }
                  //Sets edit state to its inverse. If editing, it stops. If read-only, switches into editing state
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
}

export default SessionCard;
