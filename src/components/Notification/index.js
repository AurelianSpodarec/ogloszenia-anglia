import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Snackbar,
    Button,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';

const Notification = function ({ state, message, duration = 2000, type = 'info' }) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setOpen(state)
        let notificationDuration = setTimeout(() => setOpen(false), duration)
        return () => {
            clearTimeout(notificationDuration)
        }
    }, [state])

    return ReactDOM.createPortal(
        <Snackbar open={open}>
            <Alert
                className={classes.alert}
                severity={type}
            >
                {message}
            </Alert>
        </Snackbar>,
        document.body
    )
}

export default Notification;