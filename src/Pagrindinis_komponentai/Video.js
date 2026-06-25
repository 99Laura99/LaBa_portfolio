import React from "react";
import pastatas from "./Media/pastatas.mp4";

function VideoContainer() {
  return (
    <div className="videoConteiner">
      <video autoPlay loop muted className="w-100 video">
        <source src={pastatas} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoContainer;