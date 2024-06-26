import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Full Stack Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="btn btn-outline-light mx-2" to="/adduser">
                  Add User
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="btn btn-outline-light mx-2" to="/addquestion">
                  Add Question
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light mx-2" to="/flashcard">
                  Flashcard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}