import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    Maincontainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: "8rem",
        letterSpacing: "2rem",
        color: "#333",
        textAlign: "center",
        padding: "2rem 0",
        "& span": {
            color: "#f50057",
        },
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
    left: {
        width: "50%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "50%",
        },
    },
    right: {
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "50%",
        },
    },
    formWrapper: {
        width: "80%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h2": {
            fontSize: "3rem",
            color: "#333",
            textAlign: "center",
            marginBottom: "2rem",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "100%",
        },
    },
    form: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& input": {
            width: "100%",
            height: "5rem",
            margin: "1rem 0",
            padding: "0 2rem",
            fontSize: "1.2rem",
            border: "none",
            outline: "none",
            backgroundColor: "rgba(1,1,1,0.1)",
            borderRadius: "2rem",
        },
        "& textarea": {
            width: "100%",
            height: "10rem",
            margin: "1rem 0",
            padding: "2rem",
            fontSize: "1.2rem",
            border: "none",
            outline: "none",
            backgroundColor: "rgba(1,1,1,0.1)",
            borderRadius: "2rem",
            resize: "none"
        },
        "& button": {
            width: "40%",
            height: "5rem",
            margin: "1rem 0",
            padding: "0 2rem",
            fontSize: "2rem",
            border: "none",
            outline: "none",
            backgroundColor: "#f50057",
            color: "#fff",
            borderRadius: "2rem",
            cursor: "pointer",
        }
    },
    wrapper: {
        width: "80%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h2": {
            width: "40%",
            fontSize: "5rem",
            color: "#333",
            textAlign: "left",
            marginBottom: "2rem",
            lineHeight: "1.5",
            "& span": {
                color: "#f50057",
            },
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "100%",
        },
    },
    social:{
        width: "80%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& a": {
            width: "5rem",
            height: "5rem",
            margin: "0 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "#fff",
            borderRadius: "50%",
            backgroundColor: "#333",
            cursor: "pointer",
            transition: "all 0.5s ease",
            "&:hover": {
                backgroundColor: "#f50057",
            }
        }
    },
    icon:{
        fontSize: "2.5rem !important",
    }
}));