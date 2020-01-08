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
    }


}));

export default useStyles;