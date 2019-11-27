import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        marginBottom: theme.spacing(3)
    },
    media: {
        height: 140,
        width: 200
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

export default useStyles;