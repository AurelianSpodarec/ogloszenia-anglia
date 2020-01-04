import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    customItem: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between'
    },
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

    customItemMenu: {
        position: 'absolute',
        backgroundColor: "#FFF",
        zIndex: 10,
        width: '270px',

        // top: '0',
        // left: '100%',
    },
    customItemMenuBottom: {
        top: '50px',
    },
    customItemMenuRight: {
        top: '0',
        left: '100%'
    },


    itemMoreInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        fontWeight: 'bold'
    },
    itemTitleDisabled: {
        color: '#BDBDBD',
    },
    itemSliderInfo: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchMenu: {
        maxHeight: '300px',
        overflowY: 'auto'
    },

}));

export default useStyles;
