import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';
import {
    Grid,
    Box,
    Button,
    TextField,
    InputLabel,
    FormControl,
} from '@material-ui/core';

import { useForm } from '../../../../hooks';
import PasswordInput from './../../../PasswordInput/PasswordInput';
import { AuthProvider, useAuthData } from '../../../../context/AuthContext';
import Spinner from '../../../Spinner';

const INITIAL_STATE = {
    email: "",
    password: ""
}

const AuthLoginView = ({ setView }) => {
    const classes = useStyles();
    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_STATE);

    const auth = useAuthData()

    async function submit() {
        auth.methods.login({ "email": values.email, "password": values.password })
        console.log("AUTHHH LOGIN", auth)
    }

    return (
        <Box>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container alignItems="center">
                    <Grid className={classes.inputWrap} item md={12}>
                        <FontAwesomeIcon className={classes.inputIcon} width={24} icon="envelope" />
                        <TextField
                            fullWidth
                            name="email"
                            type="email"
                            value={values.email}
                            id="input-with-icon-grid"
                            label="Email"
                            onChange={handleChange}
                        />

                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid className={classes.inputWrap} item md={12}>
                        <FontAwesomeIcon className={classes.inputIcon} width={24} icon="lock" />
                        <FormControl fullWidth>
                            <InputLabel htmlFor="auth-login-password">Password</InputLabel>
                            <PasswordInput value={values.password} onChange={handleChange} />
                        </FormControl>
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="secondary">Log in</Button>
            </form>

            <Box>
                <Button onClick={() => setView('AuthForgotPasswordView')}>Forgot your password?</Button>

                <Button onClick={() => setView('AuthRegisterView')}>Don't have an account?</Button>
            </Box>

        </Box>
    )
}

export default AuthLoginView;