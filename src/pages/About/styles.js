import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    Maincontainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",

        width: "100%",
    },
    left: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "50%",
        position: "relative",
    },
    right: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "50%",
    },
    imgContainer: {
        height: "60rem",
        width: "40rem",
        zIndex: "110",
        "& img": {
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "2rem",

        },
    },
    imgDesign: {
        position: "absolute",
        height: "60rem",
        width: "40rem",
        borderRadius: "2rem",
        backgroundImage: "linear-gradient(to left, #000046,#1CB5E0)",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        top: "0",
        left: "10rem",
        // zIndex: "10",
    },
    wrapper: {
        width: "60%",
        padding: "2rem",
        lineHeight: '1.5',
        "&>p": {
            fontSize: "2rem",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left",

        }
    },
    button: {
        width: "30%",
        height: "5rem",
        fontSize: "1.7rem !important",
        fontWeight: "bold !important",
        color: "white",
        backgroundColor: "#C33764 !important",

    },
    skillContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // height: "100vh",
        backgroundColor: "#f5f5f5",

    },
    grid: {
        display: "flex",
        // flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    gridContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "2rem",
        flexDirection: "column",
        "& h2": {
            fontSize: "4rem",
            color: "#333",
            textAlign: "left",
            marginBottom: "2rem",
        }

    },
    gridItem: {
        display: "flex !important",
        padding: "1rem !important",
        backgroundColor: "white !important",
        borderRadius: "5rem !important",
        margin: "1rem !important",
        justifyContent: "space-around !important",
        alignItems: "center !important",

    },
    skill: {
        fontSize: "2rem !important",
        color: "#333 !important",
    },
    icon:{
        fontSize: "3rem !important",
        color: "#333 !important",
        cursor: "pointer !important",
    }




}));