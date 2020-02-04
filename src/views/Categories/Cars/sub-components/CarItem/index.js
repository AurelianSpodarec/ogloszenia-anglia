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
import { CreatedSince } from '@components';

import useStyles from './styles';


const CarItem = function (props) {
    const classes = useStyles();
    let { path } = useRouteMatch();
    // console.log("ite", props.car)
    return (
        <Grid item xs={12} sm={6} md={12}>
            <Link className={classes.link} to={props.isLoading ? "" : `${path}/${props.car._id}`}>
                <Card className={classes.card}>
                    <Box className={classes.mediaBox}>
                        {props.isLoading ?
                            <Skeleton variant="rect" width={210} height={150} />
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
                                        <Box>
                                            <CreatedSince size="small" createdAt={props.car.createdAt} />
                                        </Box>

                                    </Box>
                                    <Box>
                                        {props.car.mileage ?
                                            <Typography>
                                                <FontAwesomeIcon style={{ marginRight: '4px', marginTop: '8px' }} icon="tachometer-alt" />
                                                {props.car.mileage}ml</Typography>
                                            : null
                                        }
                                    </Box>
                                </>
                            }

                            <>

                                <Box justifyContent="space-between" style={{ marginTop: 'auto' }} className={classes.detail}>
                                    {props.isLoading ?
                                        <Skeleton height="20px" width="100%" /> :
                                        <>
                                            <Grid
                                                container
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <FontAwesomeIcon className={classes.locationIcon} icon="map-marker-alt" />
                                                <Typography className={classes.location}>{props.car.location}</Typography>
                                            </Grid>
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