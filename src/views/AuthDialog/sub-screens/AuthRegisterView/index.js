import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';
import {
    Grid,
    Box,
    Button,
    TextField,
    InputLabel,
    FormControl
} from '@material-ui/core';

import { useForm } from '../../../../hooks';
import { userRegister } from '../../../../services/api/users';
import { PasswordInput } from '../../../../components';


const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const AuthRegisterView = ({ setView }) => {
    const classes = useStyles();

    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_STATE)

    function submit() {
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
                        <TextField
                            fullWidth
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
                        <FormControl fullWidth>
                            <InputLabel htmlFor="auth-login-password">Password</InputLabel>
                            <PasswordInput value={values.password} onChange={handleChange} />
                        </FormControl>
                    </Grid>
                </Grid>
                <Box>
                    <Button type="submit">Sign Up</Button>
                    <Button onClick={() => setView('AuthLoginView')}>Already have an account?</Button>
                </Box>
            </form>

        </Box>
    )
}

export default AuthRegisterView;