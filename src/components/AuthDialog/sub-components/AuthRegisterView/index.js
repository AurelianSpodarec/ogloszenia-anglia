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
import axios from 'axios';

import { useForm } from '../../../../hooks';
import { userRegister } from '../../../../services/api/users';

const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const AuthRegisterView = (isPasswordVisible, setPasswordVisibility) => {
    const classes = useStyles();

    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_STATE)

    function submit() {
        console.log({
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password
        })
        userRegister({
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password
        })
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="flex-end">
                    <Grid item md={6} alignItems="flex-end" spacing={1}>
                        <Box display="flex" alignItems="flex-end">
                            <Grid item>
                                <FontAwesomeIcon width={24} icon="envelope" />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
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
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
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
                            name="email"
                            value={values.email}
                            onChange={handleChange}
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
                                name="password"
                                id="auth-login-password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange}
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
                    <Button type="submit">Sign Up</Button>
                    <Button>Already have an account?</Button>
                </Box>
            </form>

        </Box>
    )
}

export default AuthRegisterView;