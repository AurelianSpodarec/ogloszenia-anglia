import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authTitleWrap: {
        padding: '15px 20px',
    },
    authTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    }
}));

export default useStyles;