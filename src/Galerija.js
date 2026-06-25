import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Galerija_komponentai/Galerija.css";
import Headeris from "./Galerija_komponentai/Headeris";
import Nuotraukos from "./Galerija_komponentai/Nuotraukos";
import Footeris from "./Galerija_komponentai/Footeris";



function Galerija() {

  const [isPressed, setIsPressed] = useState(false);

  const images = [
    { id: 1, src: require("./Galerija_komponentai/Media_galerija/G1.jpg"), alt: "1",  rowSpan: 12 }, 
    { id: 2, src: require("./Galerija_komponentai/Media_galerija/G2.jpg"), alt: "2",  rowSpan: 6 },  
    { id: 3, src: require("./Galerija_komponentai/Media_galerija/G3.jpg"), alt: "3",  rowSpan: 6 },  
    { id: 4, src: require("./Galerija_komponentai/Media_galerija/G4.jpg"), alt: "4",  rowSpan: 12 }, 
    { id: 5, src: require("./Galerija_komponentai/Media_galerija/G5.jpg"), alt: "5",  rowSpan: 6 }, 
    { id: 6, src: require("./Galerija_komponentai/Media_galerija/G6.jpg"), alt: "6",  rowSpan: 6 }, 
    { id: 7, src: require("./Galerija_komponentai/Media_galerija/G7.jpg"), alt: "7",  rowSpan: 12 }, 
    { id: 8, src: require("./Galerija_komponentai/Media_galerija/G8.jpg"), alt: "8",  rowSpan: 6 }, 
    { id: 9, src: require("./Galerija_komponentai/Media_galerija/G9.jpg"), alt: "9",  rowSpan: 6 }, 
    { id: 10, src: require("./Galerija_komponentai/Media_galerija/G10.jpg"), alt: "10",  rowSpan: 12 }, 
    { id: 11, src: require("./Galerija_komponentai/Media_galerija/G11.jpg"), alt: "11", rowSpan: 6 }, 
    { id: 12, src: require("./Galerija_komponentai/Media_galerija/G12.jpg"), alt: "12", rowSpan: 6 }, 
    { id: 13, src: require("./Galerija_komponentai/Media_galerija/G13.jpg"), alt: "13",  rowSpan: 12 }, 
  ];

  const handleMouseDown = () => {
    setIsPressed(true); // Paspaudus nustatome, kad nuotrauka paspausta
  };

  const handleMouseUp = () => {
    setIsPressed(false); // Atleidus paspaudimą, grįžtame į pradinę būseną
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Sklandus slinkimas
    });
  };

  return (
    <div className="mainGal container-fluid text-white bg-black d-flex flex-column position-relative p-0">
      <Headeris />
      <div className="linijaGal"></div>
      <Nuotraukos
        images={images}
        isPressed={isPressed}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
      />
      <div className="linijaGal2"></div>
      <Footeris handleScrollToTop={handleScrollToTop} />
    </div>
  );
}
export default Galerija;