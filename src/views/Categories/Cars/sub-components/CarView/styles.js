import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    carView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    mainImg: {
        height: "500px",
    },
    thumbnails: {
        height: "140px"
    },
    price: {
        fontWeight: "bold"
    },
    title: {
        fontWeight: "bold"
    },
    col: {
        flexBasis: "50%",
        maxWidth: "50%",
        flexDirection: 'column'
    }

}));

export default useStyles;