import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: "none"
    },
    sidebar: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    },
    resultNumber: {
        fontWeight: 'bold',
        marginLeft: theme.spacing(1)
    },
    listingBar: {
        marginBottom: theme.spacing(1)
    }

}));

export default useStyles;