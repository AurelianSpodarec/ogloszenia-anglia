import React, { useEffect, useState } from "react";

import {
    Snackbar,
    Button,
    // Grow,
    // Fade,
    Box,
    Typography
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

// import useStyles from './styles';

// import {
//     Snackbar,
//     Button,
//     Grow
// } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';

const CustomAlert = function ({ message, type }) {
    // const [state, setState] = React.useState({
    //     open: false,
    //     Transition: Fade,
    // });



    return (
        <Snackbar open={true}>
            <Alert
                severity={type}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default CustomAlert;