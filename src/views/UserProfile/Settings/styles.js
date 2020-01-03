import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        // height: 2,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default useStyles;