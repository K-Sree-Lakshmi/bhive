import React from "react";
import { IconButton, Toolbar } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { makeStyles } from "@mui/styles";

import logo from "../../assets/logo.jpg";
import globalStyles from "../../styles/globalStyles";
import colors from "../../styles/colors";

const useStyles = makeStyles({
  appBar: {
    position:"static",
    margin: "1rem 3rem",
    border: "1px solid #FFFFFF",
  },
  callIcon: {
    color: colors.yellow,
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
            border: `1px solid ${colors.yellow}`,
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
