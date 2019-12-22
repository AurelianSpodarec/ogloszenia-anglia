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
import useFormInput from '../../../../hooks/useFormInput';

const login = async (email, password) => {
    console.log(email, password)
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/v1/user/login',
            data: {
                email,
                password
            }
        })
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}


const INITIAL_STATE = {
    email: "",
    password: ""
}
const AuthLoginView = (isPasswordVisible, setPasswordVisibility, setView) => {
    const classes = useStyles();
    const email = useFormInput();
    // const password = useFormInput();

    return (
        <Box>
            {/* <Box className={classes.AuthHeader}>
                <Box onClick={() => setView('AuthSocialView')}>
                    <FontAwesomeIcon icon="arrow-left" />
                </Box>
                <Typography>Log In</Typography>
                {/* <Typography>Create a new account</Typography> */}
            {/* </Box> */} */}
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <FontAwesomeIcon className={classes.icon} width={24} icon="envelope" />
                </Grid>
                <Grid item>
                    <TextField {...email} id="input-with-icon-grid" label="Email" />
                </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <FontAwesomeIcon className={classes.icon} width={24} icon="lock" />
                </Grid>
                <Grid item>
                    {/* <TextField id="input-with-icon-grid" label="Email" /> */}
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
                </Grid>
            </Grid>


            <Button variant="contained" color="secondary" disabled>Log in</Button>

            <Box>
                <Button>Forgot your password?</Button>
                <Button>Don't have an account?</Button>
            </Box>
        </Box>
    )
}

export default AuthLoginView;