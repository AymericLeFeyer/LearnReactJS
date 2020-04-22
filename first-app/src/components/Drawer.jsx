import React, { Component } from "react";
import "./bootstrap.min.css";

class Drawer extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="./">
            Aymeric Le Feyer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com">
                  Liste de trucs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.github.com">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Drawer;