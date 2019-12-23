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
    DialogTitle,
    Modal,
    Fade
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
        setView('AuthSocialView')
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
            // viewToRender = <AuthSocialView setView={setView} />;
            viewToRender = <AuthLoginView setView={setView} />;

    }

    return (
        <>
            <Modal
                className={classes.authModal}
                onClose={handleClose}
                open={open}
            >
                <Fade in={open}>
                    <Box className={classes.authModalInner}>


                        <Box className={classes.authBanner}>
                            {<AuthBanner />}
                        </Box>

                        <Box className={classes.authContent}>
                            <Box className={classes.authTitle}>
                                Login | Register | Password Reset
                            </Box>
                            <Box className={classes.authBody}>

                                {viewToRender}

                            </Box>
                        </Box>

                    </Box>

                </Fade>
            </Modal>
        </>
    );
}

export default AuthDialog;

AuthDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};