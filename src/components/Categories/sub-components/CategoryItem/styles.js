import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    categoryLink: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    categoryItem: {
        backgroundColor: '#ff9d9d',
        height: '56px',
        width: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        verticalAlign: 'middle',
        color: 'white',
    },
    categoryItem__icon: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
    }
}));

export default useStyles;