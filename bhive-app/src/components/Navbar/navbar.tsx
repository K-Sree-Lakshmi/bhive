import React from "react";
import { IconButton, Toolbar } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { makeStyles } from "@mui/styles";

import logo from "../../assets/logo.jpg";
import globalStyles from "../../styles/globalStyles";
import colors from "../../styles/colors";

const useStyles = makeStyles({
  appBar: {
    position: "fixed", // Change to fixed
    top: 0, // Stick to the top
    width: "100%", // Full width to stretch across the screen
    zIndex: 1000, // Ensure it's above other elements
    margin: "0", // Remove margin to avoid offsetting the fixed position
    backgroundColor: "#FFF", // Optional: Set a background color for the navbar
    borderBottom: "1px solid #FFFFFF",
  },
  callIcon: {
    color: colors.Goldenrod,
  },
});

const Navbar = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  return (
    <div className={classes.appBar}>
      <Toolbar className={globalClasses.flexAlignBetweenCenter}>
        <img src={logo} alt="Logo" />
        <IconButton
          edge="end"
          aria-label="call"
          sx={{
            border: `1px solid ${colors.Goldenrod}`,
            borderRadius: "5px",
            boxShadow: "4px 4px 14px 0px #0000000F",
          }}
        >
          <CallIcon className={classes.callIcon} />
        </IconButton>
      </Toolbar>
    </div>
  );
};

export default Navbar;
