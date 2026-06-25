import React from "react";

function Footer({ handleScrollToTop }) {
  return (
    <footer className="d-flex justify-content-between align-items-center">
      <p className="galerijosPav" onClick={handleScrollToTop}>„MAN-MADE“</p>
      <p className="galerijosMet">2022-2024</p>
    </footer>
  );
}

export default Footer;