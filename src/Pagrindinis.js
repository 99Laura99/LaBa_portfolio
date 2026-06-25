import React, { useState } from "react";
import Navbar from "./Pagrindinis_komponentai/Navbar";
import Overlay from "./Pagrindinis_komponentai/Overlay";
import VideoContainer from "./Pagrindinis_komponentai/Video";
import Footer from "./Pagrindinis_komponentai/Apacia";
import DarbuOverlay from "./Pagrindinis_komponentai/DarbuOverlay";
import "./Pagrindinis_komponentai/Pagrindinis.css";

function Pagrindinis() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darbaiOpen, setDarbaiOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarbai = () => {
    setDarbaiOpen(!darbaiOpen);
  };

  return (
    <div className="container-fluid text-white bg-black vh-100 d-flex flex-column position-relative p-0">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && <Overlay toggleMenu={toggleMenu} />}
      {darbaiOpen && <DarbuOverlay toggleDarbai={toggleDarbai} />}
      <VideoContainer />
      <div className="linija"></div>
      <Footer toggleDarbai={toggleDarbai} />
    </div>
  );
}

export default Pagrindinis;