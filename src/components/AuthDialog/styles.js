import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authModalBackground: {
        overflow: "hidden",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authModal: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        backgroundColor: '#fff',
        overflow: "hidden",
        height: '500px',
        maxHeight: 'calc(100% - 64px)',
        borderRadius: '4px',
    },
    authBanner: {
        height: '100%',
        color: '#FFF',
        boxShadow: 'inset 0px -79px 61px 46px rgba(0,0,0,0.26)',
    },
    authBodyWrap: {
        maxWidth: '420px',
        width: '420px',
        position: 'relative',
        overflowY: 'auto',
        height: '100%',
    },
    authContent: {
        // padding: theme.spacing(2, 4, 3),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '420px'
    },
    authBody: {
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '100%',
        padding: "0 25px 15px"
    },
    authTitleWrap: {
        padding: '15px 20px',
    },
    authTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    }
}));

export default useStyles;