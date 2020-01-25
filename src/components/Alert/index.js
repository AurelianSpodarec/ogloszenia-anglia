import React, { useEffect } from "react";


import {
    Container,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    Snackbar,
    SnackbarContent,
    IconButton,
    CheckCircleIcon,
    // CloseIcon,
    ErrorIcon,
    InfoWrapper,
} from '@material-ui/core';

function Alert({ status, msg, requireUser, label }) {
    const [open, setOpen] = React.useState(true);
    useEffect(
        () => {
            setOpen(true);
        },
        [status]
    );

    const handleClose = function (event, reason) {
        if (!requireUser) {
            if (reason === "clickaway") {
                return;
            }
            setOpen(false);
        }
        return;
    }


    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            open={open}
            autoHideDuration={requireUser ? 99999 : 2000}
            onClose={handleClose}
        >
            <SnackbarContent
                status={status}
                contentprops={{
                    "aria-describedby": "message-id"
                }}
                // prettier-ignore
                message={(
                    <>
                        {requireUser ? label
                            :
                            "sd"
                        }
                    </>
                )}

                action={[
                    <>
                        {requireUser ?
                            <Button>Got it!</Button>
                            :
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={handleClose}
                            >
                                {/* <CloseIcon /> */}
                            </IconButton>
                        }
                    </>
                ]}
            />
        </Snackbar>
    );
}

export default Alert;
