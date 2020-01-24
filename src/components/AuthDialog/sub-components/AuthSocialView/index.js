import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';
import {
    Typography,
    Box,
    Button
} from '@material-ui/core';

const AuthSocialView = ({ setView }) => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.authBodyLogo}>
                <Typography variant="h6">Ogloszenia Anglia</Typography>
                <Typography>Buy and sell quickly, safely and locally</Typography>
            </Box>

            <Box className={classes.socialButtons}>
                <Button className={classes.buttonFacebook}>
                    <FontAwesomeIcon className={classes.socialButtonIcon} icon={['fab', 'facebook-f']} />
                    <Typography component="span">Continue with Facebook</Typography>
                </Button>
                <Button className={classes.buttonGoogle}>
                    <FontAwesomeIcon className={classes.socialButtonIcon} icon={['fab', 'google']} />
                    <Typography>Continue with Google</Typography>
                </Button>
            </Box>

            <Box>
                <Button onClick={() => setView('AuthRegisterView')}>Sign Up</Button>
                <Button onClick={() => setView('AuthLoginView')}>Log In</Button>
            </Box>

            <Typography className={classes.terms}>By clicking on "Sign Up", you agree on Ogloszenia Anglia <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></Typography>

        </Box>
    )
}

export default AuthSocialView;