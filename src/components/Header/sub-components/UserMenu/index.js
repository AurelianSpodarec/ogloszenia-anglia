import React from 'react';

import { withStyles } from '@material-ui/core/styles';
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
import useStyles from './styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuthData } from '../../../../context/AuthContext';
import CustomMenuItem from '../CustomMenuItem';


const CustomMenu = withStyles({
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

const UserMenu = function ({ props }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const auth = useAuthData();

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box className={classes.userInfo} onClick={handleMenu}>
                {/* <Typography className={classes.userInfoName}>{auth.user.firstName}</Typography> */}
                <Avatar className={classes.userInfoAvatar} alt="Remy Sharp"
                    src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/p960x960/11080291_10203728876572192_3782466732363772984_o.jpg?_nc_cat=108&_nc_ohc=ET3DslV_LR8AQlBIecnnU-MjALac5jGlxeqs-Jg1-jWpqk-4g7y2ovMWg&_nc_ht=scontent-lht6-1.xx&oh=d229dbd507595da4a547768270195b4d&oe=5E9DFDBD" />
            </Box>

            <CustomMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {auth.user.role === 'admin' ?
                    <>
                        <CustomMenuItem
                            label="Dashboard"
                            icon="tachometer-alt"
                        />
                        <Divider />
                    </>
                    : null}
                <CustomMenuItem
                    label="My Profile"
                    icon="user"
                    href="/myprofile"
                />
                <CustomMenuItem
                    label="Settings"
                    icon="cog"
                // onClick={() => auth.methods.logout()}
                />

                <Divider />
                <CustomMenuItem
                    label="Logout"
                    icon="sign-out-alt"
                    onClick={() => auth.methods.logout()}
                />

            </CustomMenu>
        </>
    )
}

export default UserMenu;