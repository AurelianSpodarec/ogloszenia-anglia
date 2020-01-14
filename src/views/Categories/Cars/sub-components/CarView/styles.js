import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    carView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#fff'
    },
    mainImgWrap: {
        height: '400px',
        background: 'black',
        padding: '50px 0',
        borderRadius: "8px",
    },
    mainImg: {
        height: "100%",
        padding: "3px"
    },
    details: {
        padding: "8px 32px",
    },
    thumbnails: {
        height: "140px"
    },
    price: {
        fontWeight: "bold",
        fontSize: "31px",
        color: '#000'
    },
    title: {
        fontWeight: "600",
        fontSize: "22px"
    },
    description: {
        fontWeight: 400,
        lineHeight: '20px',
        color: '#616161',
        fontSize: '16px'
    },
    col: {
        // flexBasis: "50%",
        // maxWidth: "50%",
        // flexDirection: 'column',
        boxSizing: "border-box",
    },


    userInfo: {
        display: 'flex',
    },
    userAvatar: {
        height: '40px',
    },
    userName: {
        fontSize: '16px',
        color: '#000',
        fontWeight: 'bold'
    },
    userContactDetails: {
        display: 'flex',
    }

}));

export default useStyles;