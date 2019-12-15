import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Grid,
    Typography,
    Dialog,
    CardMedia,
    DialogContent,
    DialogContentText,
    Box
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';

import AuthSocialView from './sub-components/AuthSocialView';
import AuthRegisterView from './sub-components/AuthRegisterView';
import AuthLoginView from './sub-components/AuthLoginView';


function AuthDialog({ onClose, selectedValue, open }) {
    const classes = useStyles();

    const [currentView, setView] = useState();
    const [isPasswordVisible, setPasswordVisibility] = useState(false)

    const handleClose = () => {
        onClose(selectedValue);
        setView('AuthSocialView')
    };

    const renderAuthSocialConnector = (currentView) => {
        switch (currentView) {
            case "AuthSocialView":
                return AuthSocialView(setView);
                break;
            case "AuthLoginView":
                return AuthLoginView(isPasswordVisible, setPasswordVisibility);
                break;
            case "AuthRegisterView":
                return AuthRegisterView();
                break;
            default:
                return AuthSocialView(setView);
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={false}>
            <Box className={classes.authWrap} >
                <Box className={classes.authBannerBox}>
                    <CardMedia className={classes.authBanner} image={"https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}>
                        <DialogContent>
                            <DialogContentText className={classes.featureTitle}>Log in to unlock these features</DialogContentText>
                            <Box className={classes.featureUnlock}>
                                <FontAwesomeIcon className={classes.featureUnlockIcon} icon={"camera"} />
                                <Typography>Post Listings</Typography>
                            </Box>
                            <Box className={classes.featureUnlock}>
                                <FontAwesomeIcon className={classes.featureUnlockIcon} icon={"heart"} />
                                <Typography>Save listings</Typography>
                            </Box>
                        </DialogContent>
                    </CardMedia>
                </Box>
                <Box className={classes.authBody}>
                    <DialogContent>
                        <Box className={classes.authBodyLogo}>
                            <Typography variant="h6">Ogloszenia Anglia</Typography>
                            <Typography>Buy and sell quickly, safely and locally</Typography>
                        </Box>
                        <Box className={classes.socialConnectBox}>
                            {renderAuthSocialConnector(currentView)}
                        </Box>
                    </DialogContent>
                </Box>
            </Box>
        </Dialog>
    );
}

export default AuthDialog;

AuthDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
