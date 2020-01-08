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

import useStyles from './styles';

// import Skeleton from '@material-ui/lab/Skeleton'; // Skeleton when the content is loading

const CarItem = function (props) {
    const classes = useStyles();
    let { path } = useRouteMatch();
    console.log(props)
    return (
        <Grid item xs={12} md={10}>
            <Link className={classes.link} to={`${path}/${props.car._id}`}>
                <Card className={classes.card}>
                    <Box className={classes.mediaBox}>
                        <CardMedia
                            className={classes.media}
                            // image={props.car.coverImage}
                            image={'https://iproxy2.motortrak.com/2014/ferrari/458_italia/rosso_corsa_ds_322-Stratstone_Manchester-ZFF67NHC000201564-1024-0.jpg'}
                            title="Paella dish"
                        />
                    </Box>
                    <CardContent className={classes.details}>
                        <Box className={classes.detailsInner}>
                            <Box justifyContent="space-between" className={classes.detail}>
                                <Typography className={classes.title}>{props.car.title}</Typography>
                                <Typography className={classes.price}>£{props.car.price}</Typography>
                            </Box>
                            <Box>
                            </Box>
                            <Box className={classes.detail}>
                                <Typography>{props.car.brand} - {props.car.model} - {props.car.year}</Typography>
                                <Typography>{props.car.milleage}ml</Typography>
                            </Box>
                            <Box justifyContent="space-between" style={{ marginTop: 'auto' }} className={classes.detail}>
                                <Box display="flex">
                                    <FontAwesomeIcon icon="map-marker-alt" />
                                    <Typography className={classes.location}>{props.car.location}</Typography>
                                </Box>
                                <Box display="flex">
                                    <Button><FontAwesomeIcon icon="share-square" /></Button>
                                    <Button><FontAwesomeIcon icon="heart" /></Button>
                                    {/* <Button><FontAwesomeIcon icon={['far', 'heart']} /></Button> */}
                                    {/* <Button>Chat Now</Button> */}
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}


export default CarItem;