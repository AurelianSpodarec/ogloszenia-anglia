import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cookieAlert: {
        backgroundColor: 'rgba(0,0,0, .8)',
        color: 'white',
        padding: theme.spacing(2),
        flexDirection: 'row',
        alignItems: 'center',
    }
}));

export default useStyles;