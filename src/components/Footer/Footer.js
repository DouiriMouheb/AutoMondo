import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Fotter.scss";
const Footer = () => {
  return (
    <div className="footer">
        <ScrollToTop smooth top={10} /> 
      <div>Creation H&M Digital</div>
      <div>2023</div>
    </div>
  );
};

export default Footer;
