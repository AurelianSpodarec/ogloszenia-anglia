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

    let getTodayDate = new Date();
    let getCreatedDate = new Date(createdAt);

    // const todayDate = {
    //     year: getTodayDate.getFullYear(),
    //     month: getTodayDate.getMonth(),
    //     day: getTodayDate.getDay(),
    //     hour: getTodayDate.getHours(),
    //     min: getTodayDate.getMinutes(),
    //     sec: getTodayDate.getSeconds()
    // }

    // const carDate = {
    //     year: getCreatedDate.getFullYear(),
    //     month: getCreatedDate.getMonth(),
    //     day: getCreatedDate.getDay(),
    //     hour: getCreatedDate.getHours(),
    //     min: getCreatedDate.getMinutes(),
    //     sec: getCreatedDate.getSeconds()
    // }

    // const diff = {
    //     year: todayDate.year - carDate.year,
    //     month: todayDate.month - carDate.month,
    //     day: todayDate.day - carDate.day,
    //     hour: todayDate.hour - carDate.hour,
    //     min: todayDate.min - carDate.min,
    //     sec: todayDate.sec - carDate.sec,
    // }

    var diff = (getTodayDate.getTime() - getCreatedDate.getTime()) / 1000;
    diff /= 60;

    // if(/)

    // if (diff.getMinutes() >= 60) {
    //     time = diff + 'minutes ago'
    // } else if (diff.getHours() >= 24) {
    //     time = diff + 'hours ago'
    // }

    // const numberDiff = new Date(Math.abs(Math.round(diff)))

    console.log("Today date", new Date(Math.abs(Math.round(diff))))
    // console.log("TODAY DATE", diff.year, diff.month, diff.day, diff.hour, diff.min, diff.sec)


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
                                        {/* <CreatedSince createdAt={props.car.createdAt} /> */}
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