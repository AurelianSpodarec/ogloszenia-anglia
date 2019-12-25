import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none'
    },
    linkWrap: {
        width: '80px',
        padding: '0 5px'
    },
    categoryLink: {
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'uppercase',
        color: 'rgb(117, 117, 117)',
        alignItems: 'center',
        overflowWrap: 'break-word'
    },
    categoryItem: {
        // backgroundColor: '#ff9d9d',
        marginBottom: '8px',
        height: '56px',
        width: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        verticalAlign: 'middle',
        color: 'white',
    },
    label: {
        fontSize: '11px',
        wordBreak: 'break-all',
        textAlign: 'center'
    },
    categoryItem__icon: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        fontSize: "1.5em",
    },
    categoryLinkActive: {
        backgroundColor: 'red'
    }
}));

export default useStyles;