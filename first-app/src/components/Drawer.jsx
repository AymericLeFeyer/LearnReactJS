import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <NavLink className="navbar-brand" to="/">
            Learn React
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item itemm">
                <NavLink className="nav-link" to="/liste">
                  Liste de trucs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/memory">
                  Memor'Emilie
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Drawer;
