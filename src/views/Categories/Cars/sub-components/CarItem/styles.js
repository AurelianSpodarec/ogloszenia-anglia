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
        flexDirection: 'row',
        marginBottom: theme.spacing(3)
    },
    media: {
        height: 150,
        width: 200,
        maxWidth: 220,
        minWidth: 220,
        borderRadius: "6px"
    },
    details: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: "1 1 auto"
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