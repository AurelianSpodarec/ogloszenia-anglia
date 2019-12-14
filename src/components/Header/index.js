import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Container,
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    Dialog,
    DialogTitle,
    CardMedia
} from '@material-ui/core';

// import useStyles from './styles'

// const Logo = function () {
//     const classes = useStyles();
//     return (
//         <Typography className={classes.logo} variant="h6" >
//             Ogloszenia Anglia
//         </Typography>
//     )
// }

// const SearchInput = function () {
//     const classes = useStyles();
//     return (
//         <div className={classes.searchIcon}>
//             <FontAwesomeIcon icon="search" />
//             <div>
//             </div>
//             <InputBase
//                 placeholder="Search…"

//                 inputProps={{ 'aria-label': 'search' }}
//             />
//         </div>
//     )
// }

// const HeaderButtons = function () {
//     const classes = useStyles();
//     return (
//         <>
//             <Button><FontAwesomeIcon icon={"plus"} />Dodaj Ogloszenie</Button>
//             <br/>
//             <Button color="inherit">Login</Button>
//             <Button color="inherit">Login</Button>
//         </>
//     )
// }
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        // backgroundColor: '#ffffff',
        borderBottom: '1px sold grey',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    logo: {
        color: "green"
    },
    search: {
        position: 'relative',
        flex: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
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
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: "flex",
    },
    media: {
        height: 500,
        width: 400,
        // maxWidth: 220,?
        // minWidth: 220,
        position: 'relative',
        borderRadius: "6px"
    },
    authWrap: {
        display: "flex",
        flexDirection: "row"
    },
    mediaWrap: {
        padding: '20px'
    },
    socialConnectContainer: {
        padding: '20px',
        textAlign: 'center'
    },
    dialog: {
        maxWidth: "754px",
        margin: "0 auto",
    },
    buttonFacebook: {
        backgroundColor: '#4762A0',
        width: '100%',
        color: "#fff"
    },
    buttonGoogle: {
        backgroundColor: '#c8422f',
        width: '100%',
        color: "#fff"
    },
    socialButtonIcon: {
        marginRight: '9px'
    },
    mediaTitle: {
        fontWeight: 'bold'
    }

}));

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    return (
        <Dialog modal={true} className={classes.dialog} onClose={handleClose} maxWidth={false} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.authWrap} >
                <CardMedia className={classes.media} image={"https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}>
                    <div className={classes.mediaWrap}>
                        <Typography className={classes.mediaTitle} variant="h6">Log in to unlock these features</Typography>
                        <Typography>
                            <FontAwesomeIcon icon={"camera"} />
                            Post Listings
                        </Typography>
                        <Typography>
                            <FontAwesomeIcon icon={"heart"} />
                            Save listings
                        </Typography>
                    </div>
                </CardMedia>
                <div className={classes.socialConnectContainer}>
                    <div className={classes.authLogo}>
                        <Typography className={classes.logo} variant="h6">Ogloszenia Anglia</Typography>
                        <Typography>Buy and sell quickly, safely and locally</Typography>
                    </div>

                    <div className={classes.options}>
                        <div className={classes.socialButtons}>
                            <Button className={classes.buttonFacebook}>
                                <FontAwesomeIcon className={classes.socialButtonIcon} icon={['fab', 'facebook-f']} />
                                <Typography component="span">Continue with Facebook</Typography>
                            </Button>
                            <Button className={classes.buttonGoogle}>
                                <FontAwesomeIcon className={classes.socialButtonIcon} icon={['fab', 'google']} />
                                <Typography>Continue with Google</Typography>
                            </Button>
                        </div>

                        <div>
                            <Button>Sign Up</Button>
                            <Button>Log In</Button>
                        </div>

                        <Typography className={classes.terms}>By clicking on "Sign Up", you agree on Ogloszenia Anglia <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></Typography>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

const Header = function () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>
            <div className={classes.grow}>
                <AppBar className={classes.header}>
                    <Container>
                        <Toolbar>



                            <Typography>Ogloszenia Anglia</Typography>


                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <FontAwesomeIcon icon="search" />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>

                            <div className={classes.grow, classes.userSection}>
                                <Button onClick={handleClickOpen} variant="contained" color="secondary"><FontAwesomeIcon icon={"plus"} />Dodaj Ogloszenie</Button>
                                <br />
                                <Button onClick={handleClickOpen} color="inherit">Zalogoj</Button>
                                <Button onClick={handleClickOpen} color="inherit">Stworz Konto</Button>
                            </div>
                            {/* START -- isLogged --*/}

                            {/* END -- isLogged --*/}


                        </Toolbar>
                    </Container>
                </AppBar>
            </div >
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}

export default Header;