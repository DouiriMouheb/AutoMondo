import React from "react";
import { Link } from "react-router-dom";
import "./Hedaer.scss";
import image from"../../assets/LogB&W.svg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo" >
        <img  src={image}/>
        </div>
       
      </Link>

      
    </div>
  );
};

export default Header;
