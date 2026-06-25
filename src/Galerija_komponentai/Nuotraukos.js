import React from "react";

function Nuotraukos({ images, isPressed, handleMouseDown, handleMouseUp }) {
  return (
    <div className="row galFoto container-fluid position-relative p-0 m-0">
      {images.map((image) => (
        <div key={image.id} className={`col-12 col-md-${image.rowSpan} mb-3`}>
          <img
            src={image.src}
            alt={image.alt}
            className={`img-fluid imgGal ${isPressed ? "active" : ""}`}
            id={`image-${image.id}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />
        </div>
      ))}
    </div>
  );
}

export default Nuotraukos;