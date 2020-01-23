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

const CarItem = function (props) {
    const classes = useStyles();
    let { path } = useRouteMatch();

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
                                // image={props.car.coverImage}
                                image={'https://iproxy2.motortrak.com/2014/ferrari/458_italia/rosso_corsa_ds_322-Stratstone_Manchester-ZFF67NHC000201564-1024-0.jpg'}
                                title="Paella dish"
                            />
                        }
                    </Box>
                    <CardContent className={classes.details}>

                        <Box className={classes.detailsInner}>
                            <>
                                {props.isLoading ?

                                    <Box pt={0.5}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                    :
                                    <>
                                        <Box justifyContent="space-between" className={classes.detail}>
                                            <Typography className={classes.title}>{props.car.title}</Typography>
                                            <Typography className={classes.price}>£{props.car.price}</Typography>
                                        </Box>
                                        <Box>
                                        </Box>
                                        <Box className={classes.detail}>
                                            <Typography>{props.car.brand} - {props.car.model} - {props.car.year}</Typography>
                                            {props.car.milleage ?
                                                <Typography>{props.car.milleage}ml</Typography>
                                                : null
                                            }
                                        </Box>
                                    </>
                                }
                            </>
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