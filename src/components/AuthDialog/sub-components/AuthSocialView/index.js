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


const AuthSocialView = (setView) => {
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
                <Button onClick={() => setView('AuthRegisterView')}>Sign Up</Button>
                <Button onClick={() => setView('AuthLoginView')}>Log In</Button>
            </div>

            <Typography className={classes.terms}>By clicking on "Sign Up", you agree on Ogloszenia Anglia <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></Typography>

        </div>
    )
}

export default AuthSocialView;