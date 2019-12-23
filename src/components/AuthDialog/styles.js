import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authModal: {
        overflow: "hidden",
        // background: "red"
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // height: '500px',
        // minHeight: '500px'

    },
    authModalInner: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        backgroundColor: '#fff',
        overflow: "hidden",
        // minHeight: '270px',
        height: '500px',
        maxHeight: 'calc(100% - 64px)'
    },
    authBanner: {
        height: '100%',
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
        padding: " 0 25px 15px"
    },
    authTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '15px 20px',
    }


    // auth: {
    //     overflow: 'hidden'
    // },
    // authWrap: {
    //     display: "flex",
    //     flexDirection: "row",
    //     textAlign: 'center',
    //     width: '100%',
    //     height: '500px',
    //     maxHeight: '500px',
    //     // overflowY: 'scroll',
    //     // overflow: 'hidden'
    // },
    // authBannerBox: {
    //     maxWidth: '300px',
    //     color: '#fff'
    // },
    // authBannerClose: {
    //     textAlign: 'left',
    //     cursor: 'pointer'
    // },
    // authBannerBody: {
    //     marginTop: '40px',
    // },
    // authBanner: {
    //     height: '100%',
    //     boxShadow: 'inset 0px -79px 61px 46px rgba(0,0,0,0.26)',

    // },
    // authBannerInner: {
    //     // color: '#fff'
    // },
    // featureTitle: {
    //     fontWeight: 'bold',
    //     fontSize: '20px',
    //     textAlign: 'left',
    //     color: '#fff'
    // },
    // featureUnlock: {
    //     display: 'flex',
    //     alignItems: 'center',
    // },
    // featureUnlockIcon: {
    //     marginRight: '12px',
    //     width: '22px'
    // },
    // authBodyContent: {
    //     height: '100%',
    //     // position: 'relative',
    //     overflow: 'hidden'
    // },
    // dialog: {
    //     overflowX: 'hidden'
    // }
}));

export default useStyles;