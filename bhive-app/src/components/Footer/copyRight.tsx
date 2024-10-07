import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/colors";

const useStyles = makeStyles((theme) => ({
  footerCopyright: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222E34",
    color: colors.LightSilver,
    height: "44px",
  },
}));

const CopyRight = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerCopyright}>
      &copy; Copyright 2024. Bhive Private Limited
    </div>
  );
};

export default CopyRight;
