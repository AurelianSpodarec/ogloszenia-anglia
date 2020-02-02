import React, { useState, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Typography,
    Container,
    Box
} from '@material-ui/core';
import CarItem from './sub-components/CarItem';
import useStyles from './styles'
import CarSidebar from './sub-components/CarSidebar';
import PageTitle from '../components/Title';

import { CarListContext } from '@context/CarsListContext';
import NoResults from '../components/NoResults';

const CarsView = function () {
    const classes = useStyles();
    const carProvider = useContext(CarListContext)

    return (
        <Container>

            <PageTitle title="Used Cars" />

            <Grid container spacing={4}>

                <Grid className={classes.sidebar} item xs={12} md={3}>
                    <CarSidebar />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Grid container>

                        <Grid className={classes.listingBar} item md={12}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        direction="row"
                                    >
                                        <Typography>Search Result</Typography>
                                        <Typography className={classes.resultNumber}>({carProvider.carsLength})</Typography>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <FontAwesomeIcon icon="th-large" />
                                    <FontAwesomeIcon icon="square" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {console.log(carProvider.carList === 0 ? "ok" : "no", "PPPPPPPPPPPPPPPPPPPP")}
                    <Grid container spacing={2}>
                        {
                            carProvider.isLoading ?
                                [...Array(5)].map((x, i) => <CarItem key={i} isLoading={carProvider.isLoading} />)
                                : carProvider.carList.length === 0 ?
                                    <NoResults />
                                    :
                                    carProvider.carList && carProvider.carList.map(car => {
                                        return <CarItem key={car._id} car={car} />
                                    })
                        }
                    </Grid>
                </Grid>

            </Grid >
        </Container >
    )
}

export default CarsView;
