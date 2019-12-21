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
    Box,
    DialogTitle
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';

import {
    AuthSocialView,
    AuthRegisterView,
    AuthLoginView,
    AuthBanner
} from './sub-components';


function AuthDialog({ onClose, selectedValue, open }) {
    const classes = useStyles();
    const [currentView, setView] = useState();

    const handleClose = () => {
        onClose(selectedValue);
        // setView('AuthSocialView')
    };

    let viewToRender;
    switch (currentView) {
        case "AuthSocialView":
            viewToRender = <AuthSocialView setView={setView} />;
            break;
        case "AuthLoginView":
            viewToRender = <AuthLoginView setView={setView} />;
            break;
        case "AuthRegisterView":
            viewToRender = <AuthRegisterView setView={setView} />;
            break;
        case "AuthForgotPasswordView":
            viewToRender = <AuthRegisterView setView={setView} />;
            break;
        default:
            viewToRender = <AuthSocialView setView={setView} />;
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={false}>
            <Box className={classes.authWrap}>
                <Box className={classes.authBannerBox}>
                    {AuthBanner(handleClose)}
                </Box>
                <Box className={classes.authBody}>
                    <DialogContent className={classes.authBodyContent}>
                        <Box className={classes.socialConnectBox}>

                            {/* <Box className={classes.AuthHeader}>
                                <Box onClick={() => setView('AuthSocialView')}>
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Box>

                                <Typography>Log In</Typography>
                                {/* <Typography>Create a new account</Typography> */}
                            {/* </Box> */}

                            {viewToRender}
                        </Box>
                    </DialogContent>
                </Box>
            </Box>
        </Dialog >
    );
}

export default AuthDialog;

AuthDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};