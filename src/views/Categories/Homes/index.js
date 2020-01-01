import React from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import useStyles from './styles'


const Homes = function (props) {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography>Homes</Typography>
        </Box>
    )
}

export default Homes;