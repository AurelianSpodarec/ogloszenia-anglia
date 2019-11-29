import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    carView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    mainImg: {
        height: "500px",
        borderRadius: "5px",
        padding: "3px"
    },
    details: {
        padding: "8px",
    },
    thumbnails: {
        height: "140px"
    },
    price: {
        fontWeight: "bold",
        fontSize: "24px",
    },
    title: {
        fontWeight: "bold",
        fontSize: "18px"
    },
    col: {
        flexBasis: "50%",
        maxWidth: "50%",
        flexDirection: 'column',
        boxSizing: "border-box",
    }

}));

export default useStyles;