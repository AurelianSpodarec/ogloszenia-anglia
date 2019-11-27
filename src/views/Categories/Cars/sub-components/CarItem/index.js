import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    makeStyles,
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import useStyles from './styles'



const CarItem = function (props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="https://cdn02.carsforsale.com/371454/thumbs/28AAD779-CF6D-4BDE-BB5B-040F7225FE15_1.jpg"
                title="Paella dish"
            />

            <CardContent className={classes.details}>
                <CardContent>
                    <Typography>1999 Toyota Camry</Typography>
                    <Typography>$1,100</Typography>
                </CardContent>
            </CardContent>
            <CardActions>
                <Typography>Chicago</Typography>

                <Button title="Chat now" />
            </CardActions>

        </Card>
    )
}


export default CarItem;