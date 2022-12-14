import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5rem',
        height: '10vh',
        backgroundColor: '#fff',
        boxShadow: '0 0 2rem rgba(0,0,0,0.1)',
        zIndex: "2000",
        [theme.breakpoints.down('sm')]: {
            padding: '0 1rem',
        }
    },
    logo: {
        fontSize: '3rem',
        fontWeight: 'bold',
        '& a': {
            // color: '#000',
            textDecoration: 'none',

            "& h4": {
                background: "-webkit-linear-gradient(#C33764 40%, #021B79)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    nav: {
        '& ul': {
            display: 'flex',
            listStyle: 'none',
            '& li': {
                margin: '0 1rem',
                '& a': {
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: '2rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        color: '#f50057'
                    }
                }
            }
        },
        [theme.breakpoints.down('sm')]: {
            '& ul': {
                margin: "auto"
            }
        }
    }
}));