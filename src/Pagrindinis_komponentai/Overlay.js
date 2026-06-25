import React from "react";

function Overlay({ toggleMenu }) {
  return <div className="overlay" onClick={toggleMenu}></div>;
}

export default Overlay;