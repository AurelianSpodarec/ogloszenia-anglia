import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Grid,
    Typography,
    Dialog,
    CardMedia,
    DialogContent,
    DialogContentText,
    Box
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';


function AuthBanner(handleClose) {
    const classes = useStyles();

    return (
        <>

            <CardMedia className={classes.authBanner} image={"https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}>

                <DialogContent className={classes.authBannerInner}>
                    <Box onClick={handleClose} className={classes.authBannerClose}>
                        <FontAwesomeIcon icon="times" />
                    </Box>
                    <Box className={classes.authBannerBody}>
                        <DialogContentText className={classes.featureTitle}>Log in to unlock these features</DialogContentText>
                        <Box className={classes.featureUnlock}>
                            <FontAwesomeIcon className={classes.featureUnlockIcon} icon={"camera"} />
                            <Typography className={classes.featureUnlockTitle}>Post Listings</Typography>
                        </Box>
                        <Box className={classes.featureUnlock}>
                            <FontAwesomeIcon className={classes.featureUnlockIcon} icon={"heart"} />
                            <Typography className={classes.featureUnlockTitle}>Save listings</Typography>
                        </Box>
                    </Box>
                </DialogContent>
            </CardMedia>
        </>
    )
}

export default AuthBanner;