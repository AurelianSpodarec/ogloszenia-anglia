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


const AuthLoginView = (isPasswordVisible, setPasswordVisibility) => {
    const classes = useStyles();

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
                                    onClick={() => setPasswordVisibility(!isPasswordVisible)}
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

export default AuthLoginView;