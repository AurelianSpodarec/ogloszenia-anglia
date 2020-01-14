import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Card,
    Typography,
    Container,
    Toolbar,
    Slider,
    Tooltip,
    withStyles,
    Box
} from '@material-ui/core';
import PropTypes from 'prop-types';

import CarItem from './sub-components/CarItem/';
import { getCars, getCarById } from './../../../services/api/categories/car';
import useStyles from './styles'
import axios from 'axios';
import CarSidebar from './sub-components/CarSidebar';
import PageTitle from '../components/Title';

const CarsView = function () {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCars();
            setData(result.data);
        };
        fetchData();
    }, []);

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
                                        <Typography className={classes.resultNumber}>(234)</Typography>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    Col, List
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        {data && data.map(car => {
                            return <CarItem key={car._id} car={car} />
                        })}
                    </Grid>
                </Grid>

            </Grid >
        </Container >
    )
}

export default CarsView;
