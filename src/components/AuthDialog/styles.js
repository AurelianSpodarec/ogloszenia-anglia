import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    media: {
        height: 500,
        width: 400,
        // maxWidth: 220,?
        // minWidth: 220,
        position: 'relative',
        borderRadius: "6px"
    },
    authWrap: {
        display: "flex",
        flexDirection: "row"
    },
    mediaWrap: {
        padding: '20px'
    },
    socialConnectContainer: {
        padding: '20px',
        textAlign: 'center'
    },
    dialog: {
        maxWidth: "754px",
        margin: "0 auto",
    },
    buttonFacebook: {
        backgroundColor: '#4762A0',
        width: '100%',
        color: "#fff"
    },
    buttonGoogle: {
        backgroundColor: '#c8422f',
        width: '100%',
        color: "#fff"
    },
    socialButtonIcon: {
        marginRight: '9px'
    },
    mediaTitle: {
        fontWeight: 'bold'
    }


}));

export default useStyles;