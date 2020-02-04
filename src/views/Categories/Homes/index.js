import React from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import NoResults from './../components/NoResults'
import useStyles from './styles'

const Homes = function (props) {
    const classes = useStyles();

    return (
        <Box>
            <NoResults />
        </Box>
    )
}

export default Homes;