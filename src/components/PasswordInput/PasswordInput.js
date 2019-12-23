import React, { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PasswordInput = ({ value, onChange }) => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false)

    return (
        <Input
            name="password"
            type="password"
            value={value}
            onChange={onChange}
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
    )
}

export default PasswordInput;