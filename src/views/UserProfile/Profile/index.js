import React from 'react';

import {
    Container,
    Grid,
    Typography,
    CardMedia,
    Box,
} from '@material-ui/core';

import useStyles from './styles'
import { useAuthData } from '../../../context/AuthContext';


const Profile = function (props) {
    const classes = useStyles();
    const auth = useAuthData();
    return (
        <Box className={classes.box}>
            <Typography>Profile</Typography>

            <Box>
                <Box>
                    <CardMedia />
                    <Typography>{auth.user && auth.user.firstName}</Typography>
                    {/* <Typography>Joined: {auth.use && auth.user.registerDate}</Typography> */}
                </Box>

                <Box>
                    <Typography>Items for sale</Typography>
                    <Box>
                        <Box>Post 1</Box>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default Profile;