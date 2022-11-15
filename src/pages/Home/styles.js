import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: " linear-gradient(to right,#0575E6,#021B79)",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",

        },
    },
    left: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    wrapper: {
        width: "100%",
        padding: "2rem",
        lineHeight: '1.5',
        "&>h2":{
            fontSize:"3rem",
            color:"white",
            fontWeight:"bold",
        },
        "&>h1":{
            fontSize:"4rem",
            color:"white",
            fontWeight:"bold",
        },
        "&>div":{
            fontSize:"4rem !important",
            color:"white",
            fontWeight:"bold",
        },

    },
    imgContainer: {
        height: 400,
        width: 400,
        background: "linear-gradient(to bottom left,#0575E6, #021B79)",
        // borderRadius: "50em",
        // border:" 1px solid transparent",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: 300,
            width: 300,
        },
    },
    imgContainer2: {
        height: 380,
        width: 380,
        background: "linear-gradient(to top left,#0575E6, #021B79)",
        // borderRadius: "50em",
        // border:" 1px solid transparent",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: 300,
            width: 300,
        },
    },
    img: {
        height: "95%",
        width: "95%",
        objectFit: "cover",
        borderRadius: "50%",
        margin: "auto"
    },
}));