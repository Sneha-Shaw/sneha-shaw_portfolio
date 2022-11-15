import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5rem',
        height: '10vh',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        [theme.breakpoints.down('sm')]: {
            padding: '0 2rem',
        }
    },
    logo:{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        '& a':{
            color: '#000',
            textDecoration: 'none',
        }
    },
    nav:{
        '& ul':{
            display: 'flex',
            listStyle: 'none',
            '& li':{
                margin: '0 1rem',
                '& a':{
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: '2rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    '&:hover':{
                        color: '#f50057'
                    }
                }
            }
        }
    }
}));