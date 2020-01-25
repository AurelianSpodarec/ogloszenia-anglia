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

    logoText: {
        color: '#ff3f55',
        fontSize: '1.7em',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 2)
    },
    mottoText: {
        marginBottom: theme.spacing(3)
    },
    terms: {
        fontSize: '.75em',
        color: '#999999',
    },

    dash: {
        height: '6px',
        padding: '0px 20px',
        borderBottom: '1px solid rgb(227, 227, 227)',
        lineHeight: '14px',
        background: 'white',
        display: 'block',
        marginBottom: theme.spacing(2)
    },
    dashText: {
        textTransform: 'uppercase',
        color: 'grey',
        lineHeight: '10px',
        fontSize: '14px',
        background: 'white',
        padding: '0 15px',
        fontFamily: 'Helvetica',
    },
    emailButtonWrap: {
        padding: theme.spacing(1, 0, 2)
    },
    emailButton: {
        color: '#ff3f55',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1em'
    },
    authWrap: {
        display: "flex",
        flexDirection: "row"
    },
    textField: {
        position: 'relative',
        display: 'flex'
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
    socialButtons: {
        padding: theme.spacing(2, 0, 3)
    },
    buttonFacebook: {
        backgroundColor: '#4762A0',
        width: '100%',
        color: "#fff",
        borderRadius: '20px',
        margin: theme.spacing(.5, 0),
        height: '45px',
        fontSize: '1em',
        textTransform: 'none'
    },
    buttonGoogle: {
        backgroundColor: '#c8422f',
        width: '100%',
        color: "#fff",
        borderRadius: '20px',
        margin: theme.spacing(.5, 0),
        height: '45px',
        fontSize: '1em',
        textTransform: 'none'
    },
    socialButtonIcon: {
        marginRight: '9px'
    },
    mediaTitle: {
        fontWeight: 'bold'
    }


}));

export default useStyles;