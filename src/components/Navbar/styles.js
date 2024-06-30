import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",
    boxShadow: "0 0 2rem rgba(0,0,0,0.1)",
    zIndex: "200",
    overflow: "hidden",
  },
  logo: {
    fontSize: "2rem",
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      "& h4": {
        background: "-webkit-linear-gradient(#C33764 40%, #021B79)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  nav: {
    "& ul": {
      display: "flex",
      listStyle: "none",
      "& li": {
        margin: "0 1rem",
        "& a": {
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "500",
          transition: "all 0.3s ease",
          "&:hover": {
            color: "#f50057",
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        margin: "auto",
      },
    },
  },
}));
