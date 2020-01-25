import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    SnackbarContent
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

import UserMenu from './sub-components/UserMenu'
import AuthDialog from '../AuthDialog';
import useStyles from './styles'
import { useAuthData } from '../../context/AuthContext';
import AddListing from '../../views/AddListing';
import CustomAlertCookie from '../AlertCookie';

const Header = function (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [onOpenListing, setOnOpenListing] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();


    const auth = useAuthData();

    const handleClickOpen = () => {
        if (auth.isAuthenticated) {
            setOnOpenListing(true)
        } else {
            setOpen(true);
        }
    };

    // If is Authenticated, close setOpen(false) automatically. 


    // const prevSignUpIdRef = React.useRef();
    // React.useEffect(() => {
    //     prevSignUpIdRef.current = open;
    // })
    // const prevSignUpId = prevSignUpIdRef.current;

    const onCloseListing = value => {
        // set
        setOnOpenListing(false);
    }

    const openListing = value => {
        setOnOpenListing(true);
    }

    const handleClose = value => {
        setOpen(false);
        // setSelectedValue(false);
    };

    return (
        <>
            <AppBar className={classes.header}>
                <Container maxWidth="xl">

                    <Toolbar disableGutters>

                        <a href="/">
                            <Typography className={classes.logoText}>BUBA</Typography>
                        </a>
                        <Box className={classes.search}>
                            <Box className={classes.searchIcon}>
                                <FontAwesomeIcon icon="search" />
                            </Box>
                            <InputBase
                                fullWidth
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box>

                        <Box className={classes.mobileMenuToggle}>
                            <FontAwesomeIcon icon="sliders-h" />
                        </Box>

                        {auth.isAuthenticated ? "" : <Button variant="outlined" color="secondary" onClick={handleClickOpen}>Log In</Button>}
                        <Button className={classes.listingButton} onClick={handleClickOpen} variant="contained" color="secondary">
                            <FontAwesomeIcon className={classes.listingButtonIcon} icon="plus" /> {/* //icon="bullhorn" /> */}
                            <Typography className={classes.listingButtonName}>Add Listing</Typography>
                        </Button>
                        {auth.isAuthenticated ? <UserMenu /> : ""}

                    </Toolbar>

                </Container>
            </AppBar>

            {props.children}

            <AuthDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            <AddListing open={onOpenListing} onClose={onCloseListing} />

            <CustomAlertCookie />


        </>
    )
}

export default Header;