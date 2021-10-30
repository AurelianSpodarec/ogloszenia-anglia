import React from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import useStyles from './styles'
import NoResults from '../components/NoResults';


const Default = function (props) {
    const classes = useStyles();

    return (
        <Box>
            <NoResults />
        </Box>
    )
}

export default Default;