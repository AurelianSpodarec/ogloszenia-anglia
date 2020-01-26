import React, { useState } from 'react';

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

import { useForm } from '@hooks';
import { AuthProvider, useAuthData } from '@context/AuthContext';
import { PasswordInput, Spinner, CustomAlert } from '@components';


const INITIAL_STATE = {
    email: "",
    password: ""
}

const AuthLoginView = ({ setView }) => {
    const classes = useStyles();
    const auth = useAuthData()
    const { handleChange, handleSubmit, values } = useForm(onLogin, INITIAL_STATE);
    const [isChecking, setIsChecking] = useState(false);

    async function onLogin() {
        if (values.email === "" || values.password === "") return;

        setIsChecking(true)
        try {
            const a = await auth.methods.login({ "email": values.email, "password": values.password });
            setIsChecking(true)
            if (a.status === 'ok') {
                //TODO: SHow alert
                // <CustomAlert message="Successfully authenticated" type="success" />
                setIsChecking(false)
            }
        } catch (e) {
            //TODO: Show alert
            // <CustomAlert message="Bad email or password. Try again." type="error" />
            setIsChecking(false)
        }

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

                <Button type="submit" variant="contained" color="secondary">
                    Log in
                    {isChecking ?
                        <Spinner />
                        : ""}
                </Button>
            </form>

            <Box>
                <Button onClick={() => setView('AuthForgotPasswordView')}>Forgot your password?</Button>
                <Button onClick={() => setView('AuthRegisterView')}>Don't have an account?</Button>
            </Box>

        </Box>
    )
}

export default AuthLoginView;