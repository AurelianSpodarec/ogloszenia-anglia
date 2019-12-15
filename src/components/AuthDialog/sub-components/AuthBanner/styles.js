import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    authFeatureTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'left',
        color: '#fff'
    },
    authFeatureUnlock: {
        display: 'flex',
        alignItems: 'center',

    },
    // featureUnlockTitle: {
    //     color: '#000'
    // },
    authFeatureUnlockIcon: {
        marginRight: '12px',
        width: '22px'
    },
    authBody: {
        width: '420px',
        overflowY: 'scroll'
    },
    authBodyContent: {
        height: '100%',
        overflow: 'hidden   '
    }
}));

export default useStyles;