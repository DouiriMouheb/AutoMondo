import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Fotter.scss";
const Footer = () => {
  return (
  
   <footer className="footer">
   <ScrollToTop smooth top={10} /> 
 <div className="container-footer">
   <p>Created By H&M Copyright © {new Date().getFullYear()}</p>

 </div>
</footer>
       
  );
};

export default Footer;
