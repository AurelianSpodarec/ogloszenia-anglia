import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#fff',
        padding: "20px 0",
        borderTop: '1px sold grey',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },


    footerTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: '1px solid grey',
        paddingBottom: '20px',
        marginBottom: '20px'
    },
    footerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },



    footerLinksWrap: {
        display: 'flex'
    },
    footerLinks: {
        marginLeft: '9px'
    },


    socialIconWrap: {
        display: 'flex',
    },
    socialIcon: {
        cursor: 'pointer',
        borderRadius: '40%',
        width: '20px',
        color: '#fff',
        width: '45px',
        height: '45px',
        marginRight: '6px',
        fontSize: '13px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    socialIconFacebook: {
        backgroundColor: '#3b5998'
    },
    socialIconGoogle: {
        backgroundColor: '#ff4500'
    },
    socialIconInstagarm: {
        backgroundColor: '#e1306c'
    }
}));

export default useStyles;