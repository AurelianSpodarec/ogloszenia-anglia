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


const AuthRegisterView = (isPasswordVisible, setPasswordVisibility, inputs, handleInputChange) => {
    const classes = useStyles();


    return (
        <Box>
            <Grid container alignItems="flex-end">
                <Grid item md={6} alignItems="flex-end" spacing={1}>
                    <Box display="flex" alignItems="flex-end">
                        <Grid item>
                            <FontAwesomeIcon width={24} icon="envelope" />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="firstName"
                                value={inputs.firstName}
                                onChange={handleInputChange}
                                label="First name"
                            />
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={6} alignItems="flex-end" spacing={1}>
                    <Box display="flex" alignItems="flex-end">
                        <Grid item>
                            <FontAwesomeIcon width={24} icon="envelope" />
                        </Grid>
                        <Grid item>
                            <TextField
                                // value={inputs.lastName}
                                // onChange={handleInputChange}
                                label="Last name"
                            />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <FontAwesomeIcon width={24} icon="envelope" />
                </Grid>
                <Grid item>
                    <TextField
                        // value={inputs.email}
                        // onChange={handleInputChange}
                        label="Email"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <FontAwesomeIcon width={24} icon="lock" />
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="auth-login-password">Password</InputLabel>
                        <Input
                            id="auth-login-password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            // value={inputs.password}
                            // onChange={handleInputChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setPasswordVisibility(!isPasswordVisible)}
                                    >
                                        {isPasswordVisible ? <FontAwesomeIcon icon="eye-slash" /> : <FontAwesomeIcon icon="eye" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
            </Grid>

            <Box>
                <Button>Sign Up</Button>
                <Button>Already have an account?</Button>
            </Box>

        </Box>
    )
}

export default AuthRegisterView;