import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import colors from "../../styles/colors";
import mobileDownload from "../../assets/mobileDownload.jpg";
import appleStore from "../../assets/appleStore.jpg";
import googleStore from "../../assets/googleStore.jpg";

import globalStyles from "../../styles/globalStyles";

const useStyles = makeStyles((theme) => ({
  typographyText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "28px",
    color: colors.footerGray,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "45px",
      color: colors.black,
      letterSpacing: "0.3px",
    },
  },
  footerLogo: {
    zIndex: 1,
  },
  footerText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "28px",
    color: colors.footerGray,
    [theme.breakpoints.down("sm")]: {
      display: "none", // Hide paragraph in mobile view
    },
  },
  footerContainer: {
    background: "#FFFFFF",
    border: "1px solid #00000014",
    boxShadow: "0px 2px 19px 0px #00000012",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Stack elements vertically in mobile view
      alignItems: "center",
    },
  },
  footerContent: {
    width: "600px",
  },
  storeImages: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "1rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  return (
    <div>
      <Typography className={globalClasses.margin2remTopBottom}>
        <span className={classes.typographyText}>Download our app now</span>
      </Typography>
      <div className={classes.footerContainer}>
        <img src={mobileDownload} alt="download" />
        <div
          className={`${globalClasses.justifyCenter} ${globalClasses.flexColumn} ${classes.footerContent}`}
        >
          <p className={classes.footerText}>
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className={classes.storeImages}>
            <img
              src={googleStore}
              alt="google store"
              className={globalClasses.rightMargin}
            />
            <img src={appleStore} alt="apple store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;