import React from "react";
import { Link } from "react-router-dom";

function DarbuOverlay({ toggleDarbai }) {
    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains("darbu-overlay")) {
            toggleDarbai();
        }
    };

    return (
        <div className="darbu-overlay" onClick={handleBackgroundClick}>
            {/* <button className="close-btn" onClick={toggleDarbai}>&times;</button> */}
            <div className="darbu-options">
                <div className="borderXwidth"> 
                    <Link to="/galerija" className="darbu-link" onClick={toggleDarbai}>galerija</Link>
                </div>
                <div className="borderXwidth">
                    <Link to="/AE_projects" className="darbu-link" onClick={toggleDarbai}>AE projektai</Link>
                </div>
            </div>
        </div>
    );
}

export default DarbuOverlay;