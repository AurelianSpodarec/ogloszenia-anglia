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


const Header = function (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
    const [isLogged, setIsLogged] = React.useState(true)

    const auth = useAuthData();

    const handleClickOpen = () => {
        if (auth.isAuthenticated) {
            // Redirect to a create page to add listing
            console.log("Open Add Listing")
        } else {
            setOpen(true);
        }
    };

    // React.useEffect(() => {
    //     if (auth.isAuthenticated) {
    //         setOpen(false)
    //     }
    // })

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
            <AppBar className={classes.header}>
                <Toolbar>

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
                        <FontAwesomeIcon className={classes.listingButtonIcon} icon="bullhorn" />
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
            </AppBar>

            <AuthDialog selectedValue={selectedValue} open={open} onClose={handleClose} />

        </>
    )
}

export default Header;