import React from "react";
import logo from "../images/logonike-def.png";
import "../css/Navbar.css";

const Logo = () => {
  return (
    <button className="btn-logo">
      <img className="logo" src={logo}></img>
    </button>
  );
};

export default Logo;
