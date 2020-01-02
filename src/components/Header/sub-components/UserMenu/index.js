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
import useStyles from './styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuthData } from '../../../../context/AuthContext';
import CustomMenuItem from '../CustomMenuItem';


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
                <Typography className={classes.userInfoName}>{auth.user.firstName}</Typography>
                <Avatar className={classes.userInfoAvatar} alt="Remy Sharp" src="https://yt3.ggpht.com/a/AGF-l7_j2YKzYtvVhpKBVXaxWf6y3K0VUBJA1qZTDw=s900-c-k-c0xffffffff-no-rj-mo" />
            </Box>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
                transformOrigin={{ vertical: 'top', horizontal: 'center', }}
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

            </Menu>
        </>
    )
}

export default UserMenu;