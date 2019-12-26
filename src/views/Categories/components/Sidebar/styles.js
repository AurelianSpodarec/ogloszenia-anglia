import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    sidebar: {

    },
    item: {
        padding: '12px 12px 16px',
    },
    itemMenu: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    sidebarInner: {
        overflow: 'initial'
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
    }
}));

export default useStyles;
