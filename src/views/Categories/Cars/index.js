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
import Sidebar from '../components/Sidebar';
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
            <Grid container spacing={3}>

                <Grid item sm={12} md={3}>
                    <Sidebar />
                </Grid>

                <Grid item sm={12} md={9}>
                    <Grid container>
                        {data.map(car => {
                            return <CarItem key={car._id} car={car} />
                        })}
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;
