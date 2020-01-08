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
import { getUser } from '../../../../../services/api/users';

const CarView = ({ match, location }) => {
    const classes = useStyles();
    const [car, setCar] = useState([]);
    const [user, setUser] = useState();
    // if (!match || !match.params.id) { return }

    useEffect(() => {
        const fetchCar = async () => {
            const result = await getCarById(match.params.id)
            setCar(result.data.data.car);
        };
        const fetchUser = async () => {
            // fetchUser = await getUserById()
            console.log(car, "car")
        }
        fetchCar();
    }, []);
    console.log(car, "mmsdksdksjdksdjskdjsk")
    // 
    return (
        <Container>
            <Box className={classes.carView}>


                <Grid container>

                    <Grid item className={classes.col}>
                        {/* <CardMedia
                            className={classes.mainImg}
                            image={car.coverImage}
                            title={car.title}
                        /> */}
                        <CardMedia
                            // className={classes.media}
                            // image={props.car.coverImage}
                            image={'https://iproxy2.motortrak.com/2014/ferrari/458_italia/rosso_corsa_ds_322-Stratstone_Manchester-ZFF67NHC000201564-1024-0.jpg'}
                            title="Paella dish"
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
                    </Grid>

                    <Grid item className={[classes.col, classes.details]}>
                        <Box>
                            <Typography className={classes.price}>£{car.price}</Typography>
                            <Typography className={classes.name}>{car.title}</Typography>
                        </Box>
                        <Box>
                            <Typography>Description</Typography>
                            <Typography>{car.description}</Typography>
                        </Box>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item> D</Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default CarView;