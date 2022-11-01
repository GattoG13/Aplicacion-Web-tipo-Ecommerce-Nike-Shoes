import React from "react";
import logo from "../assets/images/logonike-def.png";
import "../assets/css/App.css";

const Logo = () => {
  return (
    <button className="btn-logo">
      <img className="logo" src={logo} alt="Nike logo"></img>
    </button>
  );
};

export default Logo;
