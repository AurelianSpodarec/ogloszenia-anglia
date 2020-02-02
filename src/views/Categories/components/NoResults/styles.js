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
    },
    noResultWrap: {
        marginTop: theme.spacing(2),
        padding: '32px 0',
        background: 'white',
        borderRadius: '4px'
    },
    noResultsWrap: {
        textAlign: 'center'
    },
    noResultsSearchIcon: {
        fontSize: '2.5em',
        backgroundColor: '#eaeaea',
        padding: '20px',
        borderRadius: '50%',
        marginBottom: theme.spacing(2.5)
    }

}));

export default useStyles;