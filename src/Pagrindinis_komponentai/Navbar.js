import React from "react";
import { Link } from "react-router-dom";

function Navbar({ menuOpen, toggleMenu }) {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 w-100">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/apie" className="nav-link">apie</Link>
            </li>
            <li className="nav-item">
              <Link to="/galerija" className="nav-link">galerija</Link>
            </li>
            <li className="nav-item">
              <Link to="/AE_projects" className="nav-link">AE projektai</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;