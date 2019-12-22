import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';
import axios from 'axios';
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
import useForm from '../../../../hooks/useForm';

const login = async (email, password) => {
    console.log(email, password)
    try {
        const res = await axios({
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            url: 'http://localhost:3001/api/v1/user/login',
            data: {
                email,
                password
            }
        })
        console.log(res.data.data.user)
        return res
    } catch (err) {
        console.error(err)
    }
}

const INITIAL_STATE = {
    email: "",
    password: ""
}

const AuthLoginView = (isPasswordVisible, setPasswordVisibility) => {
    const classes = useStyles();

    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_STATE);

    function submit() {
        login(values.email, values.password)
        // login("admin@gmail.com", "admin123")
    }

    return (
        <Box>
            {/* <Box className={classes.AuthHeader}>
                            <Box onClick={() => setView('AuthSocialView')}>
                                <FontAwesomeIcon icon="arrow-left" />
                            </Box>
                            <Typography>Log In</Typography>
                            {/* <Typography>Create a new account</Typography> */}
            {/* </Box> */}
            <form onSubmit={handleSubmit} noValidate autoComplete="off">

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <FontAwesomeIcon className={classes.icon} width={24} icon="envelope" />
                    </Grid>
                    <Grid item>
                        {/* <input
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}>
                            </input> */}
                        <TextField
                            name="email"
                            type="email"
                            value={values.email}
                            id="input-with-icon-grid"
                            label="Email"
                            onChange={handleChange} />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <FontAwesomeIcon className={classes.icon} width={24} icon="lock" />
                    </Grid>
                    <Grid item>
                        {/* <TextField id="input-with-icon-grid" label="Email" /> */}
                        <FormControl>
                            <InputLabel
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                htmlFor="auth-login-password">Password</InputLabel>
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
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="secondary" >Log in</Button>
            </form>

            <Box>
                <Button>Forgot your password?</Button>
                <Button>Don't have an account?</Button>
            </Box>

        </Box>
    )
}

export default AuthLoginView;