import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    chip: {
        backgroundColor: '#e0e0e0',
        color: '#000000de',
        width: 'auto',
        display: 'flex',
        display: 'block',
        display: 'inline-block',
        padding: '0 12px',
        height: '32px',
        borderRadius: '16px',
        // marginBottom: '12px',
        fontSize: '.8em',
        margin: '4px 4px 12px'
    },
    chipInner: {
        display: 'flex',
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        height: '100%'
    },
    chipIcon: {
        width: '22px',
        cursor: 'pointer',
        height: '22px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        background: '#00000042',
        borderRadius: '50%',
        color: '#d4d4d4',
        marginLeft: '7px',
    }
}));

export default useStyles;