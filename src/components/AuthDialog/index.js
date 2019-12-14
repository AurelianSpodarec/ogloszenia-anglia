import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Grid,
    Typography,
    Dialog,
    CardMedia,
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
        <Dialog modal={true} className={classes.dialog} onClose={handleClose} maxWidth={false} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.authWrap} >
                <CardMedia className={classes.media} image={"https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}>
                    <div className={classes.mediaWrap}>
                        <Typography className={classes.mediaTitle} variant="h6">Log in to unlock these features</Typography>
                        <Typography>
                            <FontAwesomeIcon icon={"camera"} />
                            Post Listings
                        </Typography>
                        <Typography>
                            <FontAwesomeIcon icon={"heart"} />
                            Save listings
                        </Typography>
                    </div>
                </CardMedia>

                <div className={classes.socialConnectContainer}>
                    <div className={classes.authLogo}>
                        <Typography className={classes.logo} variant="h6">Ogloszenia Anglia</Typography>
                        <Typography>Buy and sell quickly, safely and locally</Typography>
                    </div>
                    <div className={classes.options}>
                        {renderAuthSocialConnector(currentView)}
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default AuthDialog;

AuthDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
