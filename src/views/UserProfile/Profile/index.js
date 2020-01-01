import React from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import useStyles from './styles'


const Profile = function (props) {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography>Profile</Typography>
        </Box>
    )
}

export default Profile;