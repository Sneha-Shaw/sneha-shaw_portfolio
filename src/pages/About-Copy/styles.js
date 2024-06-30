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
        [theme.breakpoints.down('sm')]: {
            fontSize: "4rem",
            letterSpacing: ".5rem",
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            height: "unset",
            flexDirection: "column"
        }
    },
    left: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "50%",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            width: "100%",

        }
    },
    right: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "50%",
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",

        }
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
        [theme.breakpoints.down('sm')]: {
            width: "20rem",
            height: "20rem",
            "& img": {
                borderRadius: "50%",
            }
        }
    },
    imgDesign: {
        position: "absolute",
        height: "60rem",
        width: "40rem",
        borderRadius: "2rem",
        backgroundImage: "linear-gradient(to left, #000046,#f50057)",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        top: "0",
        left: "10rem",
        [theme.breakpoints.down('md')]: {
            left: "0",
            width: "100%"
            
        },
        [theme.breakpoints.down('sm')]: {
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
            left: "1rem",
            top: "unset",
            bottom: "0rem",
       }
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

        },
        [theme.breakpoints.down('md')]: {
            width: "90%",
            "&>p": {
                fontSize: "1.5rem"
            }

        }
    },
    button: {
        width: "30%",
        height: "5rem",
        fontSize: "1.7rem !important",
        fontWeight: "bold !important",
        color: "white",
        // backgroundColor: "#C33764 !important",
        backgroundImage: "linear-gradient(to right, #C33764 0%, #1D2671 74%) !important",
        "&:hover": {
            // backgroundColor: "#f50057 !important",
            backgroundImage: "linear-gradient(to right, #f50057 0%, #1D2671 74%) !important",
        },
        [theme.breakpoints.down('md')]: {
            width: "60%",
            height: "unset",
            fontSize: "1.5rem !important",
            margin: "2rem 0 !important"
        }
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
        },
        [theme.breakpoints.down('sm')]: {
            "& h2": {
                fontSize: "2.5rem"
            }
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
    icon: {
        fontSize: "3rem !important",
        color: "#333 !important",
        cursor: "pointer !important",
    }




}));