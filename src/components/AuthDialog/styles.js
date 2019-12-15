import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authWrap: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        width: '100%',
        minHeight: '500px'
    },
    authBannerBox: {
        maxWidth: '300px',
    },
    authBanner: {
        height: '100%',
        boxShadow: 'inset 0px -79px 61px 46px rgba(0,0,0,0.26)'
    },
    featureUnlock: {
        display: 'flex',
        alignItems: 'center',
    },
    featureUnlockIcon: {
        marginRight: '8px'
    },
    authBody: {
        width: '420px'
    }
}));

export default useStyles;