import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';
import {
    Container,
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    Dialog,
    DialogTitle,
    CardMedia,
    Input,
    TextField,
    InputLabel,
    IconButton,
    InputAdornment,
    FormControl
} from '@material-ui/core';
import clsx from 'clsx';

// function AuthView

function AuthDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const [currentView, setView] = useState();
    const [isPasswordVisible, setPasswordVisibility] = useState(false)

    const openSocialView = () => {
        setView('AuthSocialView')
    }

    const openLoginView = () => {
        setView('AuthLoginView')
    }

    const openRegisterView = () => {
        setView('AuthRegisterView')
    }

    const handleClickShowPassword = () => {
        setPasswordVisibility(isPasswordVisible === false ? true : false);
    }

    // const setView = () => {

    // }

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };


    const AuthLoginView = () => {

        return (
            <div>

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <div>
                        <FontAwesomeIcon icon="lock" />
                    </div>
                    <div>
                        <InputLabel htmlFor="auth-login-password">Password</InputLabel>
                        <Input
                            id="auth-login-password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    >
                                        {isPasswordVisible ? <FontAwesomeIcon icon="eye-slash" /> : <FontAwesomeIcon icon="eye" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                </FormControl>
            </div>
        )
    }

    const AuthRegisterView = () => {
        return (
            <div>
                j
            </div>
        )
    }


    const AuthSocialView = () => {
        return (
            <div>
                <div className={classes.socialButtons}>
                    <Button className={classes.buttonFacebook}>
                        <FontAwesomeIcon className={classes.socialButtonIcon} icon={['fab', 'facebook-f']} />
                        <Typography component="span">Continue with Facebook</Typography>
                    </Button>
                    <Button className={classes.buttonGoogle}>
                        <FontAwesomeIcon className={classes.socialButtonIcon} icon={['fab', 'google']} />
                        <Typography>Continue with Google</Typography>
                    </Button>
                </div>

                <div>
                    <Button onClick={openRegisterView}>Sign Up</Button>
                    <Button onClick={openLoginView}>Log In</Button>
                </div>

                <Typography className={classes.terms}>By clicking on "Sign Up", you agree on Ogloszenia Anglia <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></Typography>

            </div>
        )
    }

    const renderAuthSocialConnector = (currentView) => {
        switch (currentView) {
            case "AuthSocialView":
                return AuthSocialView();
                break;
            case "AuthLoginView":
                return AuthLoginView();
                break;
            case "AuthRegisterView":
                return AuthRegisterView();
                break;
            default:
                return AuthSocialView();
        }
    }

    return (
        <Dialog modal={true} className={classes.dialog} onClose={handleClose} maxWidth={false} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.authWrap} >
                <CardMedia className={classes.media} image={"https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}>
                    <div className={classes.mediaWrap}>
                        <Typography className={classes.mediaTitle} variant="h6">Log in to unlock these features</Typography>
                        <Typography>
                            <FontAwesomeIcon icon={"camera"} />
                            Post Listings
                        </Typography>
                        <Typography>
                            <FontAwesomeIcon icon={"heart"} />
                            Save listings
                        </Typography>
                    </div>
                </CardMedia>
                <div className={classes.socialConnectContainer}>
                    <div className={classes.authLogo}>
                        <Typography className={classes.logo} variant="h6">Ogloszenia Anglia</Typography>
                        <Typography>Buy and sell quickly, safely and locally</Typography>
                    </div>

                    <div className={classes.options}>

                        {
                            renderAuthSocialConnector(currentView)
                        }
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default AuthDialog;

AuthDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
