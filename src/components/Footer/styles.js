import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "2rem",
        width: "100%",
        zIndex: 100,
       wordSpacing: ".5rem"
    },
    heart: {
        color: "#f50057",
        fontSize: "2rem",
    },
    name: {
        color: "#f50057",
        fontSize: "2.5rem",
    }
}));