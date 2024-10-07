import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { AppDispatch } from "../../store/store";
import { RootState } from "../../store/store";
import colors from "../../styles/colors";
import { jsonData } from "../../constants/stringConstants";
import {
  setSpaceOverViewList,
  clearSpaceOverViewList,
} from "../../services/spaceOverviewService";
import distance from "../../assets/distance.jpg";
import globalStyles from "../../styles/globalStyles";
import { KeyboardArrowRight } from "@mui/icons-material";

interface DayPassDiscount {
  value: number;
  message: string;
}

interface DayPassDiscounts {
  [key: string]: DayPassDiscount;
}

interface DynamicCardProps {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[];
  images: string;
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: DayPassDiscounts;
  manager_id: string | null;
}

const useStyles = makeStyles((theme:any) => ({
  dynamicCardTypographyText: {
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
  dynamicCard: {
    maxWidth: 345,
    margin: theme.spacing(2),
    flex: "1 0 30%",
    boxSizing: "border-box", // Ensures padding and borders are included in the width
    justifyContent: "center",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    height:"48px",
  },
  dynamicCardImage: {
    width: "100%",
    height: "200px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap", // Allows items to wrap to the next line
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  customDayPassButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: `${colors.WhiteSmoke} !important`,
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s, transform 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:focus": {
      outline: "2px solid #fff",
    },
  },
  customBulkPassButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: `${colors.MustardYellow} !important`,
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s, transform 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:focus": {
      outline: "2px solid #fff",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  arrowIcon: {
    transition: "transform 0.3s",
    color: colors.Charcoal,
    "&:hover": {
      transform: "translateX(5px)",
    },
    "&:focus": {
      transform: "translateX(5px)",
    },
  },
  dayPassText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "16.94px",
    color: colors.Taupe,
  },
  dayPassSpanText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14.52px",
    color: colors.Charcoal,
  },
  dayPassCost: {
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24.2px",
    color: colors.Charcoal,
  },
  rectangularBox: {
    position: "absolute",
    top: "-20px",  // Place the box at the top of the button
    left: "50%",
    transform: "translateX(-50%)",  // Center the box horizontally
    backgroundColor: colors.Charcoal,
    borderRadius: "3px",
    fontWeight: "bold",
  },
  discountText:{
    fontFamily: "Inter, sans-serif",
    fontSize: "8px",
    fontWeight: 500,
    lineHeight: "9.68px",
    color: colors.Ivory,
    padding: "3px 6px"
  },
  titleName:{
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24.2px",
    color: colors.Charcoal,
  }
}));

const DynamicOverViewCard = (props: any) => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  useEffect(() => {
    props.setSpaceOverViewList(jsonData);
    return () => props.clearSpaceOverViewList();
  }, []);

  const handleImageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className={globalClasses.margin2remTopBottom}>
      <Typography>
        <span className={classes.dynamicCardTypographyText}>Our Space Overview</span>
        <Box className={classes.container}>
          {props.spaceOverViewList.length &&
            props.spaceOverViewList?.map((item: DynamicCardProps) => {
              return (
                <Card className={classes.dynamicCard} key={item.id}>
                  <CardContent>
                    <div className={classes.titleRow}>
                      <Typography className={classes.titleName}>{item.name}</Typography>
                      <img
                        src={distance}
                        alt="distance"
                        onClick={() => handleImageClick(item.google_maps_url)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <img
                      src={item.images}
                      alt="Placeholder"
                      className={classes.dynamicCardImage}
                    />
                  </CardContent>
                  <CardActions className={globalClasses.justifyCenter}>
                    <Button
                      className={classes.customDayPassButton}
                      variant="contained"
                    >
                      <div className={classes.textContainer}>
                        <Typography className={classes.dayPassText}>
                          Day Pass
                        </Typography>
                        <Typography className={classes.dayPassCost}>
                          ₹ {item.day_pass_price}{" "}
                          <span className={classes.dayPassSpanText}>/ Day</span>
                        </Typography>
                      </div>
                      <KeyboardArrowRight className={classes.arrowIcon} />
                    </Button>
                    <Button
                      className={classes.customBulkPassButton}
                      variant="contained"
                    >
                      <div className={classes.rectangularBox}>
                        <span className={classes.discountText}>20% discount</span>
                      </div>
                      <div className={classes.textContainer}>
                        <Typography className={classes.dayPassText}>
                          Bulk Pass
                        </Typography>
                        <Typography className={classes.dayPassCost}>
                          ₹ 2400{" "}
                          <span className={classes.dayPassSpanText}>
                            / 10 Days
                          </span>
                        </Typography>
                      </div>
                      <KeyboardArrowRight className={classes.arrowIcon} />
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </Box>
      </Typography>
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  return {
    spaceOverViewList: store.spaceOverview.spaceOverViewList,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setSpaceOverViewList: (body: any) => dispatch(setSpaceOverViewList(body)),
    clearSpaceOverViewList: () => dispatch(clearSpaceOverViewList()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicOverViewCard);