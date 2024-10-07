import { makeStyles } from "@material-ui/core/styles";

const globalStyles = makeStyles(() => ({
  flexRow: {
    display: "flex",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexAlignBetweenCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumn: {
    flexDirection: "column",
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  margin: {
    margin: "1rem",
  },
  leftMargin: {
    marginLeft: "1rem",
  },
  rightMargin: {
    marginRight: "1rem",
  },
  margin2remTopBottom:{
    margin: "2rem 0 !important",
  }
}));

export default globalStyles;
