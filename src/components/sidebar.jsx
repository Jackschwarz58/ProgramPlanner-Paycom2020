import React, { Component } from "react";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <div id="sidebar-black-layer">
            <div className="p-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="sidebar-img"
                src={`../assets/brand-logo.jpg`}
                alt="No Image!"
                loading="lazy"
              />
              <div>
                <h5 className="mt-1">Paycom Summer Engagement Program</h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SideBar;
