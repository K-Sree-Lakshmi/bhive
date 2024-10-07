import React from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import colors from "../../styles/colors";
import { benefitCards } from "../../constants/stringConstants";
import globalStyles from "../../styles/globalStyles";
interface StaticCardProps {
  image: string;
  text: string;
  key: number;
}

const useStyles = makeStyles((theme) => ({
  staticCardTypographyText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "45px",
    letterSpacing: "0.3px",
    color: colors.Charcoal,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  cardContainer: {
    marginTop: "3rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Optional: center cards on smaller screens
    },
  },
  staticCard: {
    display: "flex",
    flex: "1 1 calc(25% - 16px)", // 4 cards per row on large screens
    alignItems: "center",
    justifyContent: "space-around",
    boxSizing: "border-box",
    width: "300px",
    height: "80px",
    border: `1px solid ${colors.WhiteSmoke}`,
    padding: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 calc(50% - 16px)", // 2 cards per row on small screens
      flexDirection: "column",
      boxShadow: "0px 2px 4px 0px #0000000F",
      width: "154px",
      borderRadius: "6px",
    },
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "45px",
    letterSpacing: "21.78px",
    color: colors.Charcoal,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      letterSpacing: "16.94px",
    },
  },
}));

const StaticCard = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  return (
    <div>
      <Typography className={globalClasses.margin2remTopBottom}>
        <span className={classes.staticCardTypographyText}>Why Choose us?</span>
      </Typography>
      <div className={classes.cardContainer}>
        {benefitCards.map((item: StaticCardProps) => (
          <div className={classes.staticCard} key={item.key}>
            <img src={item.image} alt="Card" />
            <Typography className={classes.cardTitle}>{item.text}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticCard;
