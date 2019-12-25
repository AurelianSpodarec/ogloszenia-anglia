import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    sidebar: {

    },
    item: {

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
    }
}));

export default useStyles;
