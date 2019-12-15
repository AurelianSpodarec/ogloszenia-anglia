import React, { useState } from 'react';
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
        <Box>

            <Box>
                <Box>
                    <FontAwesomeIcon className={classes.icon} width={24} icon="lock" />
                </Box>
                <FormControl>
                    <InputLabel htmlFor="auth-email">Email</InputLabel>
                    <Input id="auth-email" type={'email'} />
                </FormControl>
            </Box>

            <Box className={classes.formControl}>
                <Box>
                    <FontAwesomeIcon className={classes.icon} width={24} icon="lock" />
                </Box>
                <FormControl>
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
                </FormControl>
            </Box>

            <Button variant="contained" color="secondary" disabled>Log in</Button>

            <Box>
                <Button>Forgot your password?</Button>
                <Button>Don't have an account?</Button>
            </Box>
        </Box>
    )
}

export default AuthLoginView;