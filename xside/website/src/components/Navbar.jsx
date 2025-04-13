import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SwitchButton from "./SwitchButton";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#003547" }}>
        <Toolbar sx={{height:"10vh"}}>
          <Typography
            variant="h3"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
          >
            cod
            <span style={{ fontWeight: "bold", color: "#ffc107" }}>
              &lt;E&gt;
            </span>
            du
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  fontSize: "0.875rem",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#ffc107",
                  },
                }}
              >
                Log In
              </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  fontSize: "0.875rem",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#ffc107",
                  },
                }}
              >
                Sign In
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#ffc107", opacity: 0.75 }}
      >
        <Toolbar sx={{height:"6vh"}}>
          <Box sx={{ flexGrow: 1, color: "#003547" }}>
            <SwitchButton />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="#aboutUs" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "#003547" }}>About Us</Button>
            </Link>
            <Link to="#ourTeam" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "#003547" }}>Our Team</Button>
            </Link>
            <Link to="#ourProjects" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "#003547" }}>Our Projects</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
