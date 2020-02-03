import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Typography,
    Box,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent
} from '@material-ui/core';

import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles';

const CreatedSince = function ({ createdAt }) {

    // If below 1h: Added 45 minutes ago
    // Each hour up to 24h: Added 5hours ago
    // Each day up to 30days: Added 28days ago
    // Each month up to 12months: Added 4months ago
    // Each year: Added 1years ago

    // If its 3days or ealier, add color red and fire
    // if its 3days ore more, add color grey and a clock

    let time = '';

    let getTodayDate = new Date().getTime();
    let getCreatedDate = new Date(createdAt).getTime();


    let secondsPassed = Math.round((getTodayDate - getCreatedDate) / 1000);

    const minute = Math.round(secondsPassed / 60)
    const hour = Math.round(secondsPassed / 3600)
    const day = Math.round(secondsPassed / 86400)
    const month = Math.round(secondsPassed / 2592000)

    if ((secondsPassed / 60) < 60) {
        time = minute + " minutes ago"
    } else if ((secondsPassed / 3600) < 24) {
        time = hour + " hours ago"
    } else if ((secondsPassed / 86400) < 30) {
        time = day + " days ago"
    } else if ((secondsPassed / 2592000) < 365) {
        time = month + " month ago"
    }

    // const hour = 60 * 60,
    //     day = hour * 24,
    //     month = day * 30


    // const isMinutes = Math.floor(((seconds % 86400) % 3600) / 60);
    // const isHours = Math.floor((seconds % 86400) / 3600);
    // const isDays = Math.floor(seconds / 86400)
    // if (isMinutes > isHours) {
    //     time = isMinutes + " minutes ago"
    // } else if (isHours < isDays) {
    //     time = isHours + " hours ago"
    // } else if (isDays) {
    //     time = isDays + " days ago"
    // }

    // if (isMinutes > isHours) {
    //     time = isMinutes + " minutes ago"
    // } else if (isHours < isDays) {
    //     time = isHours + " hours ago"
    // } else if (isHours < 24 || isHours < 48) {
    //     time = "yesterday"
    // } else if (isDays) {
    //     time = isDays + " days ago"
    // } else if (isMonth) {
    //     time = isMonth + "month ago"
    // } else if (isYear) {
    //     time + isYear + "year ago"
    // }

    // console.log("TEST TIME", isMinutes, isHours, isDays)

    console.log("Today datesss", time, hour)

    return (
        <Box>
            {time}
        </Box>
    )
}

const CarItem = function (props) {
    const classes = useStyles();
    let { path } = useRouteMatch();
    // console.log("ite", props.car)
    return (
        <Grid item xs={12} sm={6} md={12}>
            <Link className={classes.link} to={props.isLoading ? "" : `${path}/${props.car._id}`}> :
                <Card className={classes.card}>
                    <Box className={classes.mediaBox}>
                        {props.isLoading ?
                            <Skeleton variant="rect" width={210} height={128} />
                            :
                            <CardMedia
                                className={classes.media}
                                image={props.car.coverImage ? props.car.coverImage : "https://via.placeholder.com/250x250"}
                                title={props.car.title}
                            />
                        }
                    </Box>
                    <CardContent className={classes.details}>

                        <Box className={classes.detailsInner}>

                            {props.isLoading ?

                                <Box pt={0.5}>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>
                                :
                                <>
                                    <Box justifyContent="space-between" className={classes.detail}>
                                        <Typography className={classes.title}>{props.car.title}</Typography>


                                        {/* START TEST */}
                                        <CreatedSince createdAt={props.car.createdAt} />
                                        {/* END TEST */}

                                        <Typography className={classes.price}>{new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'GBP',
                                            minimumFractionDigits: 0
                                        }).format(props.car.price)}</Typography>
                                    </Box>
                                    <Box>
                                    </Box>
                                    <Box className={classes.detail}>
                                        <Typography>{props.car.make} - {props.car.model} - {props.car.year}</Typography>
                                        {props.car.milleage ?
                                            <Typography>{props.car.milleage}ml</Typography>
                                            : null
                                        }
                                    </Box>
                                </>
                            }

                            <>

                                <Box justifyContent="space-between" style={{ marginTop: 'auto' }} className={classes.detail}>
                                    {props.isLoading ?
                                        <Skeleton /> :
                                        <>
                                            <Box display="flex">
                                                <FontAwesomeIcon icon="map-marker-alt" />
                                                <Typography className={classes.location}>{props.car.location}</Typography>
                                            </Box>
                                            <Box display="flex">
                                                {/* TODO: When clicked heart, assign it to user and add relation to this car then get the cout */}
                                                {/* <Button><FontAwesomeIcon icon="share-square" /></Button> */}
                                                <Button><FontAwesomeIcon icon="heart" /></Button>
                                                {/* <Button><FontAwesomeIcon icon={['far', 'heart']} /></Button> */}
                                                {/* <Button>Chat Now</Button> */}
                                            </Box>
                                        </>
                                    }
                                </Box>
                            </>
                        </Box>

                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}


export default CarItem;