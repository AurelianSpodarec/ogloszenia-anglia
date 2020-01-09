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
    Box,
    Avatar,
    Button
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

    // useEffect(() => {
    //     const fetchUser = async() => {
    //         const result = await getUserById()
    //     }
    // })

    console.log(car, "mmsdksdksjdksdjskdjsk")
    // 
    return (
        <Container>
            <Box className={classes.carView}>
                <Grid container>

                    <Grid item className={classes.col}>
                        <CardMedia
                            className={classes.mainImg}
                            image={'https://iproxy2.motortrak.com/2014/ferrari/458_italia/rosso_corsa_ds_322-Stratstone_Manchester-ZFF67NHC000201564-1024-0.jpg'}
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
                    </Grid>

                    <Grid item className={[classes.col, classes.details]}>
                        <Box>
                            <Typography className={classes.price}>£{car.price}</Typography>
                            <Typography className={classes.name}>{car.title}</Typography>
                        </Box>

                        <Box className="">
                            <Box>Added Yesterday</Box>

                            <Box>
                                <Box>Views: 238</Box>
                                <Box>Fav: 8</Box>
                            </Box>
                        </Box>

                        <Box>
                            <Typography>Car details</Typography>

                            <Box>
                                <Box>BMW</Box>
                            </Box>

                            <Box className={classes.carDetailsGenes}>
                                Icon
                                <Typography>Sedan</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography>Description</Typography>
                            <Typography>{car.description}</Typography>
                        </Box>

                        <Box className={classes.userInfo}>
                            <Avatar className={classes.userAvatar} alt="Remy Sharp"
                                src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/p960x960/11080291_10203728876572192_3782466732363772984_o.jpg?_nc_cat=108&_nc_ohc=ET3DslV_LR8AQlBIecnnU-MjALac5jGlxeqs-Jg1-jWpqk-4g7y2ovMWg&_nc_ht=scontent-lht6-1.xx&oh=d229dbd507595da4a547768270195b4d&oe=5E9DFDBD" />
                            <Box>
                                <Typography>Aurelian Spodarec</Typography>
                                <Box className={classes.userContactDetails}>
                                    <Spoiler button="Show Mobile" info="0745232" />
                                    <Spoiler button="Show Email" info="ads@gmail.com" />
                                </Box>
                            </Box>
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

const Spoiler = function ({ button, info }) {
    const [open, setOpen] = useState(false);

    const onOpen = function () {
        setOpen(true)
    }

    return (
        <Box onClick={onOpen}>
            {!open ? <Button>{button}</Button>
                :
                <Typography>{info}</Typography>
            }
        </Box>
    )
}