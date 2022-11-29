import InstagramIcon from "@mui/icons-material/Instagram";
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
      <a className="instagram-icon" href="https://www.instagram.com/nike/">
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
            "&:hover": { color: "inherit" },
          }}
        >
          © 2022 Nike, Inc. All right reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
