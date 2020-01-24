import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authBanner: {
        height: '100%',
        boxShadow: 'inset 0px -79px 61px 46px rgba(0,0,0,0.26)',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    authBannerClose: {
        textAlign: 'left',
        cursor: 'pointer'
    },
    authBannerBody: {
        marginTop: '40px',
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
    featureUnlockTitle: {
        color: '#000'
    },
    authFeatureUnlockIcon: {
        marginRight: '12px',
        width: '22px'
    },

}));

export default useStyles;