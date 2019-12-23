import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    formControl: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'row'
    },

    AuthHeader: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    inputWrap: {
        display: 'flex',
        alignItems: 'center'
    },
    inputIcon: {
        width: '22px',
        height: '22px',
        marginTop: '14px',
        marginRight: '10px'
    },

}));

export default useStyles;