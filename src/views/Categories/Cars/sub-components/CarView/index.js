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
    Chip,
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
            console.log("DSDDSDSDSDS", result)
            setCar(result.data.data.car);
        };
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

                    <Grid md="6" item className={classes.col}>
                        <Box className={classes.mainImgWrap}>
                            <CardMedia
                                className={classes.mainImg}
                                image={'https://iproxy2.motortrak.com/2014/ferrari/458_italia/rosso_corsa_ds_322-Stratstone_Manchester-ZFF67NHC000201564-1024-0.jpg'}
                                title={car.title}
                            />
                        </Box>
                    </Grid>

                    <Grid md="6" item className={[classes.col, classes.details].join(" ")}>

                        <Grid item xs={12} sm container>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs>
                                    <Typography className={classes.price}>£{car.price}</Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container item direction="row">
                                        <Grid item className={classes.icons}>
                                            <FontAwesomeIcon icon="heart" />
                                            <Typography>Save</Typography>
                                        </Grid>
                                        <Grid item className={classes.icons}>
                                            <FontAwesomeIcon icon="ellipsis-v" />
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid md={12}>
                            <Typography className={classes.title}>{car.title}</Typography>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            {/* <Box>Added Yesterday</Box> */}

                            <Chip icon={<FontAwesomeIcon icon="clock" />} label="1+ month" />

                            <Grid item>
                                <Grid container item direction="row">
                                    <Chip icon={<FontAwesomeIcon icon="eye" />} label="234" />
                                    <Chip icon={<FontAwesomeIcon icon="heart" />} label="8" />
                                </Grid>
                            </Grid>
                        </Grid>



                        <Grid
                            container

                        >
                            <Grid item>
                                <Typography>Car details</Typography>
                            </Grid>
                            <Grid direction="row"
                                alignItems="center">
                                <Box>
                                    <Box>BMW</Box>
                                </Box>
                                <Box className={classes.carDetailsGenes}>
                                    <Typography>Sedan</Typography>
                                </Box>
                            </Grid>
                        </Grid>


                        <Box>
                            <Typography className={classes.description}>{car.description}</Typography>
                        </Box>



                        <Grid container direction="column" className={classes.userInfo}>
                            <Grid item>
                                <Grid
                                    container
                                    alignItems="center"
                                    display="flex"
                                    direction="row"
                                >
                                    <Avatar className={classes.userAvatar} alt="Remy Sharp"
                                        src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/p960x960/11080291_10203728876572192_3782466732363772984_o.jpg?_nc_cat=108&_nc_ohc=ET3DslV_LR8AQlBIecnnU-MjALac5jGlxeqs-Jg1-jWpqk-4g7y2ovMWg&_nc_ht=scontent-lht6-1.xx&oh=d229dbd507595da4a547768270195b4d&oe=5E9DFDBD" />
                                    <Typography className={classes.userName}>Aurelian Spodarec</Typography>
                                </Grid>
                            </Grid>

                            <Grid item className={classes.userButtons}>
                                <Grid container direction="row">
                                    <Grid item md={6}>

                                        <Button fullWidth variant="outlined" color="secondary">
                                            <FontAwesomeIcon icon="heart" />Show Mobile
                                            </Button>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Button fullWidth variant="contained" color="secondary">Show Email</Button>
                                    </Grid>
                                    {/* <Box className={classes.userContactDetails}> */}
                                    {/* <Spoiler button="Show Mobile" info="0745232" /> */}
                                    {/* <Spoiler button="Show Email" info="ads@gmail.com" /> */}
                                    {/* </Box> */}
                                </Grid>
                            </Grid>
                        </Grid>


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
            {!open ? <Button >{button}</Button>
                :
                <Typography>{info}</Typography>
            }
        </Box>
    )
}