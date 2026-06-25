import React from "react";
import { Link } from "react-router-dom";
import logo from "./Media_galerija/logo.png";

function Header() {
  return (
    <header className="d-flex align-items-center position-relative w-100 px-4" style={{ minHeight: '70px' }}>
      <Link to="/" className="atgal text-white fs-1 text-decoration-none z-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
          <path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585786 13.5858ZM2 17H4V13H2V17Z" fill="#ACACAC" />
        </svg>
      </Link>
      <h1 className="pavGal">GALERIJA</h1>
      <Link to="/" className="ms-md-auto z-3">
        <img src={logo} alt="Logo" className="logoGal" />
      </Link>
    </header>
  );
}

export default Header;