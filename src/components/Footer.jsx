import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/css/Footer.css";

// Son component
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="instagram-icon">
        <a href="https://www.instagram.com/nike/">
          <InstagramIcon
            variant="outlinedSizeSmall"
            color="inherit"
            fullWidth={false}
          />
        </a>
      </div>
      <div>
        <div className="copyright-text">
          <p>© 2022 Nike, Inc. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
