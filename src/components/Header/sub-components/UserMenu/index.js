import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Grid,
    Typography,
    Box,
    Avatar,
    Divider
} from '@material-ui/core';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import useStyles from './styles';

// import { StyledMenuItem, StyledMenu} from '.'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { userLogin, userLogout } from '../../../../services/api/users';

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

const UserMenu = function () {
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box onClick={handleMenu}>
                <div>
                    <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/a/AGF-l7_j2YKzYtvVhpKBVXaxWf6y3K0VUBJA1qZTDw=s900-c-k-c0xffffffff-no-rj-mo" />
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
                {/* {user.role === 'admin' ? } */}
                <StyledMenuItem>
                    <ListItemIcon>
                        <FontAwesomeIcon icon="tachometer-alt" />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </StyledMenuItem>
                <Divider />
                {/* // : } */}
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
                <StyledMenuItem onClick={() => userLogout()}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon="sign-out-alt" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
        </>
    )
}

export default UserMenu;