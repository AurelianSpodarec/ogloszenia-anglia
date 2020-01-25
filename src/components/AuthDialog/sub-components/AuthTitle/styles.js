import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authTitleWrap: {
        padding: '15px 20px',
        display: 'inline-block',
        float: 'left',
    },
    authTitleInner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    authTitle: {
        fontSize: '1em',
        fontWeight: 'bold',
        marginLeft: theme.spacing(2)
    },
    authIconWrap: {
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#eaeaea',
        }
    },
    authIcon: {
        color: '#adadad'
    }
}));

export default useStyles;