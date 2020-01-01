import React from 'react';

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

import useStyles from './styles'


const Settings = function (props) {
    const classes = useStyles();
    return (
        <Box>
            <Typography>SETTINGS</Typography>
        </Box>
    )
}

export default Settings;