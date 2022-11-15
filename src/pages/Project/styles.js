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
        // alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
    },
    card: {
        width: "30rem",
        height: "35rem",
        margin: "2rem",
        "& .MuiCardHeader-root": {
            textAlign: "center",
        },
        "& .MuiCardMedia-root": {
            height: "20rem",
            width: "100%",
            objectFit: "cover",
            // borderRadius: "2rem",
        },
        "& .MuiCardContent-root": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiButton-root": {
                width: "100%",
                height: "100%",
                fontSize: "1.5rem",
                backgroundColor: "#C33764",
                "&:hover": {
                    backgroundColor: "#f50057",
                },
                "& a": {
                    textDecoration: "none",
                    color: "#fff",
                }
            }
        },
    },

}));