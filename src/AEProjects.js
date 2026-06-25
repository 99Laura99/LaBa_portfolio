import React from "react";
import Headeris from "./AEProjects_komponentai/Headeris";
import VideoPlayer from "./AEProjects_komponentai/VideoPlayer";
import video1 from "./AEProjects_komponentai/Media/xenoscapa.mp4";
import video2 from "./AEProjects_komponentai/Media/AE_handwritten.mp4";
import "./AEProjects_komponentai/AEpr.css";

function AEProjects() {
   return (
    <div className="container-fluid text-white bg-black d-flex flex-column position-relative p-0">
      <Headeris />
      <div className="linijaAE"></div>

      <div className="container-fluid projects-container mt-3">
        <div className="row project-row align-items-center">
          <div className="col-12 col-md-6">
            <div className="video-box">
             <VideoPlayer src={video1} className="ae-video" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="tekstas-box ps-md-5">
              <h2>XENOSCAPA</h2>
              <p>animuotas intro klipas. grafiniai elementai ir iliustracijos sukurti „adobe illustrator“ aplinkoje.</p>
            </div>
          </div>
        </div>

        <div className="row project-row align-items-center">
          <div className="col-12 col-md-6 order-md-2">
            <div className="video-box">
              <VideoPlayer src={video2} className="ae-video" />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="tekstas-box pe-md-5 text-right">
              <h2>HANDWRITTEN TEXT AUTOMATION SCRIPT</h2>
              <p>„after effects“ (ExtendScript) įrankis, skirtas ranka rašyto teksto animacijos automatizavimui. skriptas nuskaito pažymėtus tekstinius sluoksnius ir iš paruoštos raidžių bibliotekos sugeneruoja naujas kompozicijas. <br /> integruoti parametrų valdymo slankikliai: <br />
              • animacijos greitis ir laikas <br />
              • intervalai tarp raidžių ir žodžių <br />
              • spalvos ir tekstūros
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
   );
}

export default AEProjects;