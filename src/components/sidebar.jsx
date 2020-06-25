import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <div id="sidebar-black-layer">
            <div className="p-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="sidebar-img"
                src={`../assets/brand-logo.jpg`}
                height="133px"
                width="133px"
                alt="???"
                loading="lazy"
              />
              <div>
                <h6 className="mt-1">Paycom Summer Engagement Program</h6>
              </div>
            </div>
          </div>
        </div>
        <h6 className="p-3 text-center" id="sidebar-session-header">
          Upcoming Sessions
        </h6>
      </nav>
    );
  }
}

export default SideBar;