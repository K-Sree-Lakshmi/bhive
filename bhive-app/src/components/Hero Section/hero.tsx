import React from "react";
import heroPartOne from "../../assets/heroPartOne.jpg";
import heroPartTwo from "../../assets/heroPartTwo.jpg";
import video from "../../assets/video.jpg";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "400px",
    backgroundImage: `url(${heroPartOne}), url(${heroPartTwo})`,
    backgroundSize: "50% 100%, 50% 100%",
    backgroundPosition: "left, right",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Stack content vertically on small screens
      height: "auto", // Allow height to adjust
    },
  },
  leftContent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  rightContent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Keep image in center
      margin: "5rem 0", // margin for mobile view (to modify)
    },
  },
  overlayImage: {
    maxWidth: "80%",
    height: "auto",
  },
  textLayout: {
    width: "806px",
    height: "254px",
    top: "170px",
    left: "120px",
    gap: "0px",
    opacity: "0px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center", // Center text for smaller screens
      width: "322px",
      height: "62px",
      top: "404px",
      left: "19px",
    },
  },
  typographyText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "58px",
    fontWeight: 700,
    lineHeight: "70.19px",
    letterSpacing: "-1px",
    textAlign: "left",
    color: colors.black,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 600,
      fontSize: "20px", 
      lineHeight: "24.2px",
      textAlign: "center", // Center text for mobile
    },
  },
  priceText: {
    color: colors.yellow,
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {/* Left content with overlay text */}
      <Box className={classes.leftContent}>
        <Typography variant="h3" align="center" className={classes.textLayout}>
          <span className={classes.typographyText}>
            Host your meetings with world-class amenities. Starting at{" "}
          </span>
          <span className={`${classes.typographyText} ${classes.priceText}`}>
            ₹199/-!
          </span>
        </Typography>
      </Box>

      {/* Right content with overlay image */}
      <Box className={classes.rightContent}>
        <img src={video} alt="Overlay" className={classes.overlayImage} />
      </Box>
    </Box>
  );
};

export default Hero;
