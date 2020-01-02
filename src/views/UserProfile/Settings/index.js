import React from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@material-ui/core';

import useStyles from './styles'


const Settings = function (props) {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography>SETTINGS</Typography>

            <Box>

                <Box>
                    <Typography>Password</Typography>
                </Box>

                <Box>
                    Here change your password
                </Box>

            </Box>
        </Box>
    )
}

export default Settings;