import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "10%",
    padding: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "1.5rem",
    width: "100%",
    zIndex: 100,
    wordSpacing: ".5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      wordSpacing: ".1rem",
    },
  },
  heart: {
    color: "#f50057",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  name: {
    color: "#f50057",
    fontSize: "1.6rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));
