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
    const [isPasswordVisible, setPasswordVisibility] = useState(false)
    const [inputs, setInputs] = useState({ firstName: "" });
    // Inputs for login, register, reset password, contain similar fields, so would I just
    // loginEmail, resetEmail, registerEmail and stuff ufff
    const handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value)
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleClose = () => {
        onClose(selectedValue);
        setView('AuthSocialView')
    };

    const renderAuthSocialConnector = (currentView) => {
        switch (currentView) {
            case "AuthSocialView":
                return AuthSocialView(setView);
                break;
            case "AuthLoginView":
                return AuthLoginView(isPasswordVisible, setPasswordVisibility, setView);
                break;
            case "AuthRegisterView":
                return AuthRegisterView(isPasswordVisible, setPasswordVisibility, inputs, handleInputChange);
                break;
            // case "AuthForgotPasswordView":
            // return AuthRegisterView();
            // break;
            default:
                return AuthSocialView(setView);
            // return AuthLoginView(isPasswordVisible, setPasswordVisibility);
        }
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

                            {renderAuthSocialConnector(currentView)}
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