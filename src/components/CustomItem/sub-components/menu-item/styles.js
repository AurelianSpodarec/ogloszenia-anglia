import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    customItemContent: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '12px 12px 16px',
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#eee'
        }

    },
    customItemContentActive: {
        backgroundColor: '#eee'
    },
    customItemMenuContent: {
        maxHeight: '368px',
        overflowY: 'auto',
        overflowX: 'hidden',
    },

}));

export default useStyles;
