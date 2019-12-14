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

function AuthRegisterView() {
    const classes = useStyles();
    return (
        <div>

        </div>
    )
}

function AuthLoginView() {
    const classes = useStyles();
    const [isPasswordVisible, setPasswordVisibility] = useState(false)

    const handleClickShowPassword = () => {
        setPasswordVisibility(isPasswordVisible === false ? true : false);
    }

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

function AuthSocialView() {
    const classes = useStyles();
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
                <Button>Sign Up</Button>
                <Button>Log In</Button>
            </div>

            <Typography className={classes.terms}>By clicking on "Sign Up", you agree on Ogloszenia Anglia <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></Typography>

        </div>
    )
}

function AuthDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const { currentView, setView } = useState();

    // const views = {
    //     AuthSocialView,
    //     AuthLoginView,
    //     AuthRegisterView
    // }
    const setView = () => {
        setView()
    }

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

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
                            AuthLoginView()

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
