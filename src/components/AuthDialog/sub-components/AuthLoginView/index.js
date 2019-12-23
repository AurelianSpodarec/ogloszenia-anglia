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

import { useForm } from '../../../../hooks';
import { userLogin } from '../../../../services/api/users';
import PasswordInput from '../../../../hooks/PasswordInput';


const INITIAL_STATE = {
    email: "",
    password: ""
}

const AuthLoginView = ({ setView }, isPasswordVisible, setPasswordVisibility) => {
    const classes = useStyles();
    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_STATE);

    function submit() {
        userLogin({ "email": values.email, "password": values.password })
    }
    return (
        <Box className={classes.aaa}>
            <Box className={classes.AuthHeader}>
                <Box onClick={() => setView('AuthSocialView')}>
                    <FontAwesomeIcon icon="arrow-left" />
                </Box>
                <Typography>Log In</Typography>
            </Box>
            <Box className={classes.bbb}>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <FontAwesomeIcon className={classes.icon} width={24} icon="envelope" />
                        </Grid>
                        <Grid item>
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
                                    htmlFor="auth-login-password">Password</InputLabel>
                                <PasswordInput
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {/* <Input
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
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
                                /> */}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Button type="submit" variant="contained" color="secondary" >Log in</Button>
                </form>
            </Box>

            <Box>
                <Button>Forgot your password?</Button>
                <Button>Don't have an account?</Button>
            </Box>

        </Box>
    )
}

export default AuthLoginView;