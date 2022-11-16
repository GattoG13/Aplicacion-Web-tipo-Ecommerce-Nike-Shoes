import React, { useContext } from "react";
import logo from "../assets/images/logonike-def.png";
import "../assets/css/Navbar.css";
import { contextoGeneral } from "../components/CartContext";

const Logo = () => {
  const { darkMode } = useContext(contextoGeneral);

  return (
    <button className="btn-logo">
      <img
        sx={{ color: darkMode ? "#f9f9f9" : "#000" }}
        className="logo"
        src={logo}
        alt="Nike logo"
      ></img>
    </button>
  );
};

export default Logo;
