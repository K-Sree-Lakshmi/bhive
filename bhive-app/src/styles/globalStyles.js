import { makeStyles } from "@mui/styles";

const globalStyles = makeStyles((theme) => ({
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
}));

export default globalStyles;
