import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    formControl: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: '22px',
        height: '22px'
    },
    AuthHeader: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    aaa: {
        // position: 'relative',
    },
    bbb: {
        position: 'relative',
    }

}));

export default useStyles;