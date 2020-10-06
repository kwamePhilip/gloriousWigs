import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg header navbar-dark sticky-top">
      <a class="navbar-brand" href="#">
        Glorious Wigs
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <Link to="/" class="nav-link">
            <li class="nav-item active">
              Home <span class="sr-only">(current)</span>
            </li>
          </Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <Link to="/cat1Page" class="nav-link">
            <li class="nav-item">Category 1 </li>
          </Link>

          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
