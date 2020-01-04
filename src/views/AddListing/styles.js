import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    box: {
        // backgroundColor: "#000",
        // width: '300px',
        // height: '300px',
    },
    customTextAreaLimit: {
        textAlign: 'right'
    },
    dialogTitle: {
        textTransform: 'uppercase',
        fontFamily: 'Helvetica',
        textAlign: 'center',
    },
    dropzone: {
        borderRadius: '12px',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: 'rgb(245, 245, 245)',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flex: '1 1 0%',
        margin: '30px 0',
        '&:hover': {
            borderColor: '#ff6c02'
        }
    },
    dropzoneDragActive: {
        borderColor: '#ff6c02',
        '&hover': {
            borderColor: '#ff6c02',
        }
    },
    dropzoneInner: {
        padding: '50px 64px',
        // display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        flex: '1 1 0%'
    },
    dialogActions: {
        padding: '24px'
    },
    dialogActionsButton: {
        fontWeight: 'bold',
        borderRadius: '20px',
        padding: '9px 0'
    },
    dropzoneText: {

    },



    listingForm: {
        marginBottom: '24px',
    }
}));

export default useStyles;