import React from "react";
import { Link } from "react-router-dom";
import "./Hedaer.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">AUTO MONDO HMAIED </div>
      </Link>

      <div className="user-image">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
