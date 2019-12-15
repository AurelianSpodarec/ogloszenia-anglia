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
    }

}));

export default useStyles;