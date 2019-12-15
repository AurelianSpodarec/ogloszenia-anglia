import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    auth: {
        overflow: 'hidden'
    },
    authWrap: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        width: '100%',
        height: '500px',
        maxHeight: '500px',
        // overflowY: 'scroll',
        // overflow: 'hidden'
    },
    authBannerBox: {
        maxWidth: '300px',
        color: '#fff'
    },
    authBannerClose: {
        textAlign: 'left',
        cursor: 'pointer'
    },
    authBannerBody: {
        marginTop: '40px',
    },
    authBanner: {
        height: '100%',
        boxShadow: 'inset 0px -79px 61px 46px rgba(0,0,0,0.26)',

    },
    authBannerInner: {
        // color: '#fff'
    },
    featureTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'left',
        color: '#fff'
    },
    featureUnlock: {
        display: 'flex',
        alignItems: 'center',
    },
    featureUnlockIcon: {
        marginRight: '12px',
        width: '22px'
    },
    authBody: {
        width: '420px',
        overflowY: 'auto'
    },
    authBodyContent: {
        // height: '100%',
        // position: 'relative',
        overflow: 'hidden'
    }
}));

export default useStyles;