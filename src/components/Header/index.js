import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    Avatar,
    Divider
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import UserMenu from './sub-components/UserMenu'
import AuthDialog from '../AuthDialog';
import useStyles from './styles'
import { useAuthData } from '../../context/AuthContext';
import AddListing from '../../views/AddListing';


const Header = function (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedListingValues, setSelectedListingValues] = React.useState();
    const [selectedValue, setSelectedValue] = React.useState();
    const [isLogged, setIsLogged] = React.useState(true)

    const [openListing, setOpenListing] = React.useState(false);

    const auth = useAuthData();

    const handleClickOpen = () => {
        if (auth.isAuthenticated) {
            console.log("Open Add Listing")
            // setOpenListing(true)
        } else {
            setOpen(true);
            console.log("open 3 ")
        }
    };

    // React.useEffect(() => {
    //     if (auth.isAuthenticated) {
    //         setOpen(false)
    //     }
    // })
    console.log('ope 3')

    const onCloseListing = value => {
        // set
        // setOpenListing(value);
    }

    const onOpenListing = value => {
        // setOpenListing(true);
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

                        <Typography className={classes.logoText}>BUBA</Typography>

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

                        <Button className={classes.listingButton} onClick={handleClickOpen} variant="contained" color="secondary">
                            <FontAwesomeIcon className={classes.listingButtonIcon} icon="plus" /> {/* //icon="bullhorn" /> */}
                            <Typography className={classes.listingButtonName}>Add Listing</Typography>
                        </Button>

                        <Box>
                            {auth.isAuthenticated ?
                                <UserMenu /> :
                                <>
                                    <Button onClick={handleClickOpen} color="inherit">Log In</Button>
                                    <Button onClick={handleClickOpen} color="inherit">Sign Up</Button>
                                </>
                            }
                        </Box>


                    </Toolbar>

                </Container>
            </AppBar>

            <AuthDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            <AddListing selectedValue={openListing} open={onOpenListing} onClose={onCloseListing} />


        </>
    )
}

export default Header;