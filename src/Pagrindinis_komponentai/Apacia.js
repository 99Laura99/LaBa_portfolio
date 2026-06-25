import React from "react";
import { Link } from "react-router-dom";
import logo from "./Media/logo.png";

function Footer({ toggleDarbai }) {
  return (
    <div className="apacia">
      <div className="row d-flex justify-content-center w-100">
        <div className="col-12 col-md-4 text-center skiltis borderXwidth d-none d-md-block">
          <Link to="/apie" className="navLink">apie</Link>
        </div>
        <div className="logoContainer col-12 col-md-4 text-center">
          <img src={logo} alt="Logo" className="logo" />
          <div className="tekstas"><small>multimedė, IT inžinierė</small></div>
        </div>
        <div className="col-12 col-md-4 text-center skiltis borderXwidth d-none d-md-block">
          <button 
            onClick={toggleDarbai}
            className="navLink"
          >
            darbai
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;