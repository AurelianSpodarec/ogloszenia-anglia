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

const AuthTitle = function ({ title, setView }) {
    return (
        <>
            <Box onClick={() => setView('AuthSocialView')}>
                <FontAwesomeIcon icon="arrow-left" />
            </Box>
            <Typography>{title}</Typography>
        </>
    )
}

function AuthDialog({ onClose, selectedValue, open }) {
    const classes = useStyles();
    const [currentView, setView] = useState();

    const handleClose = () => {
        onClose(selectedValue);
        setView('AuthSocialView')
    };

    let viewToRender;
    let titleToRender;
    switch (currentView) {
        case "AuthSocialView":
            viewToRender = <AuthSocialView setView={setView} />;
            titleToRender = null;
            break;
        case "AuthLoginView":
            viewToRender = <AuthLoginView setView={setView} />;
            titleToRender = <AuthTitle setView={setView} title="Login" />
            break;
        case "AuthRegisterView":
            viewToRender = <AuthRegisterView setView={setView} />;
            titleToRender = <AuthTitle setView={setView} title="Register" />
            break;
        case "AuthForgotPasswordView":
            viewToRender = <AuthRegisterView setView={setView} />;
            titleToRender = <AuthTitle setView={setView} title="Password Reset" />
            break;
        default:
            // viewToRender = <AuthSocialView setView={setView} />;
            titleToRender = <AuthTitle setView={setView} title="Login" />
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
                                {titleToRender}

                                {/* Login | Register | Password Reset */}
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