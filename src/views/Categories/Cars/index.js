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

                <Grid item xs={12} md={3}>
                    <CarSidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Grid container>
                        <Grid item md={12}>

                            <Box>
                                <Typography>Search Result:</Typography><Typography>(234)</Typography>
                            </Box>

                            <Box>
                                Col, List
                        </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        {data && data.map(car => {
                            return <CarItem key={car._id} car={car} />
                        })}
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;
