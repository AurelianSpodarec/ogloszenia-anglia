import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Typography,
    Box,
    Button,
    Card,
    CardMedia,
    CardContent
} from '@material-ui/core';

import useStyles from './styles';

const CarItem = function (props) {
    const classes = useStyles();
    let { path } = useRouteMatch();

    return (
        <Link className={classes.link} to={`${path}/${props.car._id}`}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    // image={props.car.media[0].img}
                    title="Paella dish"
                />
                <CardContent className={classes.details}>
                    <Box justifyContent="space-between" className={classes.detail}>
                        <Typography className={classes.title}>{props.car.title}</Typography>
                        <Typography className={classes.price}>£{props.car.price}</Typography>
                    </Box>
                    <Box className={classes.detail}>
                        <Typography>{props.car.brand} - {props.car.model} - {props.car.year}</Typography>
                        <Typography>{props.car.milleage}ml</Typography>
                    </Box>
                    <Box justifyContent="space-between" className={classes.detail}>
                        <Box display="flex">
                            <FontAwesomeIcon icon="map-marker-alt" />
                            <Typography className={classes.location}>{props.car.location}</Typography>
                        </Box>
                        <Button>Chat Now</Button>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    )
}


export default CarItem;