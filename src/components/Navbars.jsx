import ClearAllIcon from "@mui/icons-material/ClearAll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { contextoGeneral } from "../components/CartContext";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const pages = [
  { label: "Home", link: "/" },
  { label: "AirMax", link: "/category/Airmax" },
  { label: "Jordan", link: "/category/Jordan" },
];

const Navbars = () => {
  const { darkMode, setWhiteMode, cart } = React.useContext(contextoGeneral);
  const [cant, setCant] = React.useState(0);
  React.useEffect(() => {
    setCant(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: darkMode ? "#000" : "#ececec" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Logo />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: darkMode ? "#ececec" : "#000",
              textDecoration: "none",
            }}
          >
            NIKE - SHOES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ color: darkMode ? "#ececec" : "#000" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <ClearAllIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page.link}>{page.label}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: darkMode ? "#ececec" : "#000",
              textDecoration: "none",
            }}
          >
            NIKE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#ffffff",
                  my: 2,
                  display: "block",
                }}
              >
                {" "}
                <Link to={page.link}>{page.label}</Link>
              </Button>
            ))}
          </Box>
          <Typography sx={{ color: darkMode ? "#ececec" : "#000" }}>
            Dark Mode{" "}
          </Typography>
          <Switch
            color="secondary"
            onClick={() => setWhiteMode(!darkMode)}
          ></Switch>

          <Box sx={{ flexGrow: 0 }}>
            <CartWidget quantity={cant} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbars;
