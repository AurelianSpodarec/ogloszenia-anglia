import React, { useState } from 'react';
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

import { useForm } from '@hooks';
import { userRegister } from '@services/api/users';
import { PasswordInput, Notification } from '@components';


const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const AuthRegisterView = ({ setView }) => {
    const classes = useStyles();

    const [notification, setNotification] = useState({})
    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_STATE)

    async function submit() {
        try {
            const res = await userRegister({
                "firstName": values.firstName,
                "lastName": values.lastName,
                "email": values.email,
                "password": values.password
            })
            if (res.status === 'success') {
                setNotification({})
                setNotification({ state: true, message: "You have successfully registered.", type: "success" })
                // setIsChecking(false)
            }
        } catch (e) {
            setNotification({})
            setNotification({ state: true, message: "Pleaes check your details, or try again later.", type: "error" })
            // setIsChecking(false)
        }
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

            <Notification state={notification.state} message={notification.message} type={notification.type} duration={notification.duration} />

        </Box>
    )
}

export default AuthRegisterView;