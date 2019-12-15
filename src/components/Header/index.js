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

import { fade, makeStyles } from '@material-ui/core/styles';
import AuthDialog from '../AuthDialog';
import useStyles from './styles'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

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
                    <Box onClick={handleMenu}>
                        <div>
                            <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                        </div>
                    </Box>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {/* START IS ADMIN */}
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon="tachometer-alt" />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </StyledMenuItem>
                        <Divider />
                        {/* END IS ADMIN */}
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon="user" />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon="cog" />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </StyledMenuItem>
                        <Divider />
                        <StyledMenuItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon="sign-out-alt" />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </StyledMenuItem>
                    </StyledMenu>
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
                                <Button onClick={handleClickOpen} variant="contained" color="secondary">
                                    <FontAwesomeIcon icon="bullhorn" />
                                    Add Listing
                                </Button>
                                <br />
                                {isUserLogged(true)}
                            </div>


                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
            <AuthDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}

export default Header;