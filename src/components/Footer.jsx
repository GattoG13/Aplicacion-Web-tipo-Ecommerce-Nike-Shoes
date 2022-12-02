import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { contextoGeneral } from "../components/CartContext";
import "../assets/css/Footer.css";

// Son component
const Footer = () => {
  const { darkMode } = useContext(contextoGeneral);

  return (
    <Box
      className="footer-container"
      sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
    >
      <a className="icons" href="https://www.instagram.com/nike/">
        <InstagramIcon
          variant="outlinedSizeSmall"
          color="inherit"
          fullWidth={false}
        />
      </a>

      <Box className="copyright-text">
        <Typography
          sx={{
            color: darkMode ? "#f9f9f9" : "#000",
          }}
        >
          © 2022 Nike, Inc. All right reserved.
        </Typography>
      </Box>
      <a className="icons" href="https://twitter.com/nike">
        <TwitterIcon
          variant="outlinedSizeSmall"
          color="inherit"
          fullWidth={false}
        />
      </a>
    </Box>
  );
};

export default Footer;
