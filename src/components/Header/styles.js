import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#ffffff',
        borderBottom: '1px sold grey',
    },
    logoText: {
        color: 'black',
        fontSize: '1.6em',
        fontWeight: 'bold'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    mobileMenuToggle: {
        color: 'orange',

        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logo: {
        color: "green"
    },


    listingButton: {
        display: 'none',
        marginLeft: theme.spacing(1.5),
        textTransform: 'inherit',
        borderRadius: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    listingButtonIcon: {

    },
    listingButtonName: {
        marginLeft: theme.spacing(1)
    },

    search: {
        position: 'relative',
        flex: 1,
        borderRadius: '8px', //theme.shape.borderRadius,
        backgroundColor: '#eeeeee',
        // '&:hover': {
        //     backgroundColor: fade(theme.palette.common.white, 0.25),
        // },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchInput: {

    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1.25, 1, 1.25, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        color: 'grey'
    },

    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: "flex",
    },

}));

export default useStyles;