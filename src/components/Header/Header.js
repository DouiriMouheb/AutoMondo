import React from "react";
import { Link } from "react-router-dom";
import "./Hedaer.scss";
import left from "../../assets/LogB&W.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo1">
          <img src={left} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
