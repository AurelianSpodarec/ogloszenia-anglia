import React from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import useStyles from './styles'


const Default = function (props) {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography>Default</Typography>
        </Box>
    )
}

export default Default;