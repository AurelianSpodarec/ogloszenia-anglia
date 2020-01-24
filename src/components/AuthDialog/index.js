import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Box,
    Modal,
    Fade
} from '@material-ui/core';

import {
    AuthSocialView,
    AuthRegisterView,
    AuthLoginView,
    AuthBanner,
    AuthTitle
} from './sub-components';

import useStyles from './styles';


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
            viewToRender = <AuthSocialView setView={setView} />;
            titleToRender = null;
    }

    return (
        <>
            <Modal
                className={classes.authModalBackground}
                onClose={handleClose}
                open={open}
            >
                <Fade in={open}>
                    <Box className={classes.authModal}>

                        <Box className={classes.authBanner}>
                            {<AuthBanner onClose={handleClose} />}
                        </Box>

                        <Box className={classes.authContent}>
                            <Box>
                                {titleToRender}
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
    selectedValue: PropTypes.string,
};