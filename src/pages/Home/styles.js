import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: " linear-gradient(to right,#C33764,#021B79)",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            backgroundImage: " linear-gradient(to bottom,#C33764 10%,#021B79 90%)",

        },
    },
    left: {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            // width: "70%",
            height: "40%"

        },
    },
    right: {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            width: "70%",
            textAlign: "center",
            height: "60%"
        },

    },
    wrapper: {
        width: "100%",
        height: "100%",
        padding: "2rem",
        lineHeight: '1.5',
        
        "&>h2": {
            fontSize: "3rem",
            color: "white",
            fontWeight: "bold",
        },
        "&>h1": {
            fontSize: "4.5rem",
            color: "#C33764",
            fontWeight: "bold",
        },
        "&>div": {
            fontSize: "4rem !important",
            color: "white",
            fontWeight: "bold",
        },
        [theme.breakpoints.down("md")]: {
            textAlign: "left",

            "&>h2": {
                fontSize: "2rem",
                marginTop: "1rem"
            },
            "&>h1": {
                fontSize: "2.5rem"
            },
            "&>div": {
                fontSize: "2.5rem !important"
            },
        },
    },
    imgContainer: {
        height: 300,
        width: 300,
        background: "linear-gradient(to bottom left,#C33764, #000046)",
        // borderRadius: "50em",
        // border:" 1px solid transparent",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: 200,
            width: 200

        },
    },
    imgContainer2: {
        height: 280,
        width: 280,
        background: "linear-gradient(to top right,#C33764, #000046)",
        // borderRadius: "50em",
        // border:" 1px solid transparent",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: 200,
            width: 200,
            background: "linear-gradient(to top left,#C33764, #000046)",

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