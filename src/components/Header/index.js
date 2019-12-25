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

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import AuthDialog from '../AuthDialog';
import useStyles from './styles'

import UserMenu from './sub-components/UserMenu'

const Header = function () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
    // const [user, setUser] = useState()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    const isUserLogged = (boolean) => {
        if (boolean) {
            return (
                <>
                    {UserMenu()}
                </>
            )
        } else {
            return (
                <>
                    <Button onClick={handleClickOpen} color="inherit">Log In</Button>
                    <Button onClick={handleClickOpen} color="inherit">Sign Up</Button>
                </>
            )
        }
    }

    return (
        <div>
            <div className={classes.grow}>
                <AppBar className={classes.header}>
                    <Toolbar>

                        <Typography className={classes.logoText}>Ogloszenia Anglia</Typography>
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
                            <Button onClick={handleClickOpen} variant="contained" color="secondary">
                                <FontAwesomeIcon icon="bullhorn" />
                                Add Listing
                                </Button>
                            <br />
                            {isUserLogged(true)}
                        </div>


                    </Toolbar>
                </AppBar>
            </div>
            <AuthDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}

export default Header;