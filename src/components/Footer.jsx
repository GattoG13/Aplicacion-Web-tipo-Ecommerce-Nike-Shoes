import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/css/Footer.css";

// Son component
export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.instagram.com/nike/">
        <InstagramIcon
          className="instagram-icon"
          variant="outlinedSizeSmall"
          color="inherit"
          fullWidth={false}
        />
      </a>
      <div>
        <p className="copyright-text">© 2022 Nike, Inc. All right reserved.</p>
      </div>
    </div>
  );
}
