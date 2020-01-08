import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: "none"
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px"
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
        height: 170,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: 150,
            width: 200,
            // maxWidth: 220,
            minWidth: 220,
        }
    },
    mediaBox: {
        padding: '12px',
    },

    details: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        padding: '16px',
        [theme.breakpoints.up('md')]: {
            alignItems: "flex-start",
        }
    },
    detailsInner: {
        display: 'flex',
        flexDirection: "column",
        width: '100%',
        height: '100%',
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