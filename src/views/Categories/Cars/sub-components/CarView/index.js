import React, { useState, useEffect } from 'react';
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
import { getCarById } from '../../../../../services/api/categories/car';

const CarView = ({ match, location }) => {
    const classes = useStyles();
    const [car, setCar] = useState([]);

    // if (!match || !match.params.id) { return }

    useEffect(() => {
        const fetchCar = async () => {
            const result = await getCarById(match.params.id)
            setCar(result.data.data.car);
        };
        fetchCar();
    }, []);

    // 
    return (
        <Container>
            <Box className={classes.carView}>

                <Box className={classes.col}>
                    <CardMedia
                        className={classes.mainImg}
                        image={car.coverImage}
                        title={car.title}
                    />
                    <Box>
                        {/* {car.media.map(img => {
                            return <CardMedia
                                className={classes.thumbnails}
                                image={img.img}
                            // title={car.alt}
                            />
                        })} */}
                    </Box>
                </Box>

                <Box className={[classes.col, classes.details]}>
                    <Box>
                        <Typography className={classes.price}>£{car.price}</Typography>
                        <Typography className={classes.name}>{car.title}</Typography>
                    </Box>
                    <Box>
                        <Typography>Description</Typography>
                        <Typography>{car.description}</Typography>
                    </Box>
                </Box>

            </Box>
        </Container>
    )
}

export default CarView;