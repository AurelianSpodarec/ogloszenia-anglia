import React from 'react';
import {
    Typography,
    Box,
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';

const AuthTitle = function ({ title, setView }) {
    const classes = useStyles();

    return (
        <Box className={classes.authTitleWrap} onClick={() => setView('AuthSocialView')}>
            <Box className={classes.authTitleInner}>
                <Box className={classes.authIconWrap}>
                    <FontAwesomeIcon className={classes.authIcon} icon="arrow-left" />
                </Box>
                <Typography className={classes.authTitle}>{title}</Typography>
            </Box>
        </Box>
    )
}

export default AuthTitle;