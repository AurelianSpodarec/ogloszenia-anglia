import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: "none"
    },
    title: {
        fontWeight: "bold",
        fontSize: "18px"
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    media: {
        borderRadius: "6px",
        height: 150,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
            maxWidth: 220,
            minWidth: 220,
        }
    },

    details: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        [theme.breakpoints.up('md')]: {
            alignItems: "flex-start",
        }
    },
    detail: {
        width: "100%",
        display: "flex"
    },
    price: {
        fontWeight: "bold",
        fontSize: "24px",
        color: "#000"
    }



}));

export default useStyles;