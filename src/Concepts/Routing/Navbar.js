import React from "react";
import "./Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav_bg">
        <div className="container">
          <Link class="navbar-brand nav_logo" to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" />
          </Link>
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
            <ul class="navbar-nav m-auto nav_lists">
              <li class="nav-item ">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/user-about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/user-services">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/user-contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/user-form-post">
                  Login/signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;