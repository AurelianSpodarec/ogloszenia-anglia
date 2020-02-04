import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Typography,
    Container,
    CardMedia,
    Box,
    Avatar,
    Chip,
    Button
} from '@material-ui/core';

import Skeleton from '@material-ui/lab/Skeleton';
import { getCarById } from '@services/api/categories/car';
import { CreatedSince } from '@components';

import useStyles from './styles';

const CarView = ({ match, location }) => {
    const classes = useStyles();
    const [car, setCar] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCar = async () => {
            const result = await getCarById(match.params.id)
            setCar(result.data.car);
            if (result.status === "success") {
                setIsLoading(false)
            }
        };
        fetchCar();
    }, []);

    return (
        <Container>
            <Box className={classes.carView}>
                <Grid container>

                    <Grid xs="12" md="6" item className={classes.col}>
                        <Box className={classes.mainImgWrap}>

                            {isLoading ?
                                <Skeleton height="150" width="150" />
                                :
                                <CardMedia
                                    className={classes.mainImg}
                                    image={car.coverImage ? car.coverImage : "https://via.placeholder.com/250x250"}
                                    title={car.title}
                                />
                            }
                        </Box>
                    </Grid>

                    <Grid xs="12" md="6" item className={[classes.col, classes.details].join(" ")}>

                        <Grid item xs={12} sm container>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs>
                                    {isLoading ?
                                        <Skeleton height="70px" width="55%" />
                                        :
                                        <Typography className={classes.price}>{new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'GBP',
                                            minimumFractionDigits: 0
                                        }).format(car.price)}</Typography>
                                    }
                                </Grid>


                                <Grid item>
                                    {isLoading ? "" :
                                        <Grid container item direction="row">
                                            <Grid item className={classes.icons}>
                                                <FontAwesomeIcon icon="heart" />
                                                <Typography>Save</Typography>
                                            </Grid>
                                            <Grid item className={classes.icons}>
                                                <FontAwesomeIcon icon="ellipsis-v" />
                                            </Grid>
                                        </Grid>
                                    }
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid md={12}>
                            {isLoading ?
                                <Skeleton height="60px" /> :
                                <Typography className={classes.title}>{car.title}</Typography>
                            }
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ marginBottom: '12px' }}
                        >
                            {isLoading ? "" :
                                <>
                                    <CreatedSince createdAt={car.createdAt} />

                                    <Grid item>
                                        <Grid container item direction="row">
                                            <Chip icon={<FontAwesomeIcon icon="eye" />} label="234" />
                                            <Chip icon={<FontAwesomeIcon icon="heart" />} label="8" />
                                        </Grid>
                                    </Grid>
                                </>
                            }
                        </Grid>

                        <Grid
                            container
                            direction="column"
                        >
                            {isLoading ? "" :
                                <>
                                    <Grid item>
                                        <Typography>Car details</Typography>
                                    </Grid>
                                    <Grid
                                        className={classes.carDetailsChipWrap}
                                        item
                                        container
                                        direction="row"
                                        alignItems="center"
                                    >
                                        <Grid item className={classes.carDetailsGenes}>
                                            {/* TODO: Change 'car.make' to 'car.make' */}
                                            <Chip label={car.make} variant="outlined" />
                                        </Grid>
                                        <Grid item className={classes.carDetailsGenes}>
                                            <Chip label={car.model} variant="outlined" />
                                        </Grid>
                                        <Grid item className={classes.carDetailsGenes}>
                                            <Chip label={car.year} variant="outlined" />
                                        </Grid>
                                    </Grid>
                                </>
                            }
                        </Grid>

                        {isLoading ?
                            "" :
                            <>
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
                                        <Grid container spacing={2} direction="row">
                                            <Grid item md={6}>

                                                <Button fullWidth variant="outlined" color="secondary">
                                                    <FontAwesomeIcon icon="phone" />Show Mobile
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
                            </>
                        }


                    </Grid>
                </Grid>

                {/* <Grid container>
                    <Grid item> D</Grid>
                </Grid> */}


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