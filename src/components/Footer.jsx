import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { contextoGeneral } from "../App.js";
import "../assets/css/Footer.css";

// Son component
const Footer = () => {
  const { whiteMode } = useContext(contextoGeneral);

  return (
    <Box sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}>
      <a className="instagram-icon" href="https://www.instagram.com/nike/">
        <InstagramIcon
          variant="outlinedSizeSmall"
          color="inherit"
          fullWidth={false}
        />
      </a>
      <Box className="copyright-text">
        <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
          © 2022 Nike, Inc. All right reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
