import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";

const NotFound = function () {
    // const classes = useStyles();
    let location = useLocation();

    return (
        <div>
            <h1>404</h1>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NotFound;