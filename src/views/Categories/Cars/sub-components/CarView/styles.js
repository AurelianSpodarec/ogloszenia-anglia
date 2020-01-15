import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    carView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#fff'
    },
    mainImgWrap: {
        height: '320px',
        background: 'black',
        borderRadius: "8px",
        [theme.breakpoints.up('md')]: {
            padding: '50px 0',
            height: '500px',
        }
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
        fontSize: "22px",
        marginBottom: '16px',
        overflow: 'hidden',
    },
    description: {
        fontWeight: 400,
        lineHeight: '20px',
        color: '#616161',
        fontSize: '16px',
        margin: '24px 0'
    },
    col: {
        // flexBasis: "50%",
        // maxWidth: "50%",
        // flexDirection: 'column',
        boxSizing: "border-box",
    },

    section: {

    },

    userInfo: {
        display: 'flex',
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: '#e0e0e0',
        borderImage: "initial",
        padding: "16px",
        borderRadius: "8px",
    },
    userButtons: {
        marginTop: "20px",
        borderTop: "1px solid silver",
        paddingTop: "20px",
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