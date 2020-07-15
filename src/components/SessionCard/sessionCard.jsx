import React, { Component } from "react";
import DatePicker from "react-datepicker"; //Used for users to be able to select dates and times easier. Much more user friendly than an input field
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //Needed for icons
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; //For nice buttons
import { format } from "date-fns"; //Nicer Date formatting. Didn't want to use Moment, wayy to big
import "./sessionCard.css"; //Styling

class SessionCard extends Component {
  state = { editing: false, sessionDate: new Date(), sessionId: null }; //Editing flag is used to built editable fields. StartDate needed for datepicker

  constructor() {
    super();

    this.buildDateEditField = this.buildDateEditField.bind(this);
    this.buildTitleEditField = this.buildTitleEditField.bind(this);
    this.buildDescEditField = this.buildDescEditField.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate() {
    const givenTime = new Date(this.props.dateTime);
    return <span>{format(givenTime, "eeee MMMM do, yyyy 'at' h:mmaaa")}</span>;
  }

  //The foloowing are all only rendered when the user is editing a session. Since it would have been messy code in if statements in render(), they are seperate funcs. Much easier to read
  buildDateEditField() {
    return (
      <DatePicker //I chose a datepicker component as it was the most user friendly way to pick dates and the react-datepicker package is super well done already.
        className="edit-field"
        selected={this.props.dateTime}
        onChange={(e) => this.props.onFieldChange(e, this.props.id)}
        showTimeSelect
        timeFormat="hh:mm a"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="EEEE MMMM d, yyyy 'at' h:mma" //Prefered date format
      />
    );
  }

  //Builds Edit Field for Card Title
  buildTitleEditField() {
    return (
      <input
        className="edit-field"
        id="card-edit-field"
        type="text"
        name="sessionName"
        defaultValue={this.props.title}
        onChange={(e) => this.props.onFieldChange(e, this.props.id)}
        placeholder="Session Title"
      />
    );
  }

  //Builds Edit Field for Card Description
  buildDescEditField() {
    return (
      <textarea
        className="edit-field"
        id="card-desc-edit-field"
        type="text"
        name="sessionDesc"
        placeholder="Session Description"
        onChange={(e) => this.props.onFieldChange(e, this.props.id)}
        defaultValue={this.props.desc}
      ></textarea>
    );
  }

  render() {
    const { id, title, desc, attendeeCount, onDelete, onEdit } = this.props; //Avoiding repeated code

    return (
      <div className="container bg-light my-4 p-3 rounded shadow-sm">
        <div className="row anchor" id={id}>
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
                {!this.state.editing
                  ? this.formatDate()
                  : this.buildDateEditField()}
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
              <span>{attendeeCount}</span>
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
