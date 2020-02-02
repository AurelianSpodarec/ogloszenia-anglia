import React, { useState, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Typography,
    Container,
    Box
} from '@material-ui/core';
import useStyles from './styles'

const NoResults = function () {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.noResultWrap}
        >
            <Box className={classes.noResultsWrap}>
                <FontAwesomeIcon className={classes.noResultsSearchIcon} icon="search" />
                <Typography>OOPS! NO RESULTS NEAR YOU</Typography>
                <Typography styles={{ maxWidth: '330px' }}>Try looking for something else or check again soon!</Typography>
            </Box>
        </Grid>

    )
}

export default NoResults;
