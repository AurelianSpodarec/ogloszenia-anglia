import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    sidebar: {

    },
    item: {
        padding: '12px 12px 16px',
        position: 'relative'
    },
    itemMenu: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    itemMoreInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        fontWeight: 'bold'
    },
    itemSliderInfo: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchMenu: {
        maxHeight: '300px',
        overflowY: 'auto'
    },
    menu: {
        position: 'absolute',
        top: '0',
        left: '100%',
        width: '270px',
        backgroundColor: "#FFF"
    }
}));

export default useStyles;
