import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    Card,
    CardMedia
} from '@material-ui/core';

// import useStyles from './styles'

const CarsView = function () {
    // const classes = useStyles();

    return (
        <div>
            <h1>Cars</h1>
            <Card>
                <CardMedia
                    // className={classes.media}
                    image="https://cdn02.carsforsale.com/371454/thumbs/28AAD779-CF6D-4BDE-BB5B-040F7225FE15_1.jpg"
                    title="Paella dish"
                />
            </Card>

        </div>
    )
}

export default CarsView;