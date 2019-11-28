import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    makeStyles,
    Grid,
    Typography,
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from '@material-ui/core';

import useStyles from './styles'



const CarItem = function (props) {
    const classes = useStyles();
    let { id } = useParams();
    let { path, url } = useRouteMatch();

    return (
        <Link to={`${path}/${props.car.carId}`}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={props.car.media[0].img}
                    title="Paella dish"
                />

                <CardContent className={classes.details}>
                    <CardContent>
                        <Typography>{props.car.name}</Typography>
                        <Typography>${props.car.price}</Typography>
                    </CardContent>
                </CardContent>
                <CardActions>
                    <Typography>Chicago</Typography>

                    <Button title="Chat now" />
                </CardActions>

            </Card>
        </Link>
    )
}


export default CarItem;