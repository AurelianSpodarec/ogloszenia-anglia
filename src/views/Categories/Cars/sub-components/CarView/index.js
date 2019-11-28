import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    makeStyles,
    Grid,
    Card,
    Typography,
    Container,
    CardItem,
    CardMedia,
    Box
} from '@material-ui/core';

import { fetchProduct } from './../../../../../services/api/product';

const CarView = ({ match, location }) => {
    const classes = useStyles();

    if (!match || !match.params.id) return;
    const car = fetchProduct("car", parseInt(match.params.id))

    return (
        <Container>
            <Box className={classes.carView}>

                <Box className={classes.col}>
                    <CardMedia
                        className={classes.mainImg}
                        image={car.media[0].img}
                        title={car.name}
                    />
                    <Box>
                        {car.media.map(img => {
                            return <CardMedia
                                className={classes.thumbnails}
                                image={img.img}
                            // title={car.name}
                            />
                        })}
                    </Box>
                </Box>

                <Box className={classes.col}>
                    <Box>
                        <Typography className={classes.price}>{car.price}</Typography>
                        <Typography className={classes.name}>{car.name}</Typography>
                    </Box>
                    <Box>
                        <Typography>Description</Typography>
                        <p>Amazing car, it run on oil and fire. When angry, it gets all green and treas are green but burn in fire</p>
                    </Box>
                </Box>

            </Box>
        </Container>
    )
}

export default CarView;