import React from "react";
import "../css/Navbar.css";
import {
  IconButton,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  SvgIcon,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="Navbar">
      <AppBar position="sticky" sx={{ background: "#000" }}>
        <Toolbar>
          <IconButton aria-label="app" color="inherit">
            <Menu />
          </IconButton>
          <Logo />
          <Tabs textColor="inherit">
            <Tab label="Products" />
            <Tab label="Categories" />
            <Tab label="Contact Us" />
          </Tabs>
          <Button
            sx={{ marginLeft: "auto", background: "#000" }}
            variant="contained"
          >
            {" "}
            Login
          </Button>
          <Button
            sx={{ background: "#000", my: 2, color: "white", display: "block" }}
            variant="contained"
          >
            {" "}
            Sign up
          </Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
