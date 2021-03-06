import React, { useEffect, useState } from "react";

import {
    Snackbar,
    Button,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';

// TODO: Refactor this to one function 'Alert', no need for two alerts;

const CustomAlertCookie = function () {
    const classes = useStyles();
    const [state, setState] = useState(false);

    // STACKOVERFLOW COOKIE CODE
    function setCookie(name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }

    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    const onAccept = function () {
        console.log("Button")
        setState(false)
        setCookie("userAcceptedCookies", "yes", 999)
    }

    useEffect(() => {
        const isCookieSet = getCookie("userAcceptedCookies")
        if (isCookieSet === 'yes') {
            setState(false)
        } else {
            setState(true)
        }
    }, []);

    return (
        <>
            <Snackbar open={state}>
                <Alert
                    className={classes.cookieAlert}

                    severity="info"
                    action={
                        <Button onClick={onAccept} style={{ border: '1px solid', marginLeft: '16px' }} color="inherit" size="small">
                            OK
                        </Button>
                    }
                >
                    We use cookies to ensure you the best experience on our website.
                </Alert>
            </Snackbar>
        </>
    )
}

export default CustomAlertCookie;