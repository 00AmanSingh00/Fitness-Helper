import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import Logout from "./Logout";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "123px", xs: "40px" }, mt: { sm: "32px", xs: "20px" }, justifyContent: "none" }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "0px 20px" }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: "none", fontSize: "33px", fontFamily: "Arial", color: "#3A1212", borderBottom: "3px solid #8e9091" }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: "none", fontSize: "21px", paddingBottom: "7px", fontFamily: "Arial", color: "#3A1212" }}>Exercises</a>
      {isAuthenticated && <Logout setIsAuthenticated={setIsAuthenticated} />}
    </Stack>
  </Stack>
);

export default Navbar;
