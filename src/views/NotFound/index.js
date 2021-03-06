import React from 'react';
import { useLocation } from "react-router-dom";

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import useStyles from './styles'


const NotFound = function (props) {
    const classes = useStyles();
    let location = useLocation();
    return (
        <Box className={classes.box}>
            <Typography>Not Found: </Typography>
            <code>{location.pathname}</code>
        </Box>
    )
}

export default NotFound;