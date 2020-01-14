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
        marginLeft: '8px'
    },
    listingBar: {
        marginBottom: '8px'
    }


}));

export default useStyles;