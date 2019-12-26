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

const carFilter = {
    postedBy: ['All', 'Individual', 'Dealership'],
    cars: [
        { bwm: ['600', 'M2'] },
        { astronMartin: ['B6 COver', 'Covert'] }
    ],
    year: [1960, 2020],
    mileage: [0, 300000],
    bodyStyle: ["All", "Sedan", "Hybrid", "Convertible", "Truck", "Coupe", "Hatchback", "Minivan", "Wagon", "SUV", "Others"],
    transmition: ["All", "Automatic", "Manual"],
    fuel: ["Disel", "Electric", "Flex", "Gas", "Hybrid", "Others"],
    drivetrain: ["4WD", "AWD", "FWD", "RWD"],
    seats: [1, 9],

    // Location['Leicester', 'Manchester'] - perhaps later use google maps for proximity and such
    // Price[min, max], 
    // Sort By['Relevance', 'Date (most recent)', 'Price: low to high', 'Price: high to low', 'CLosest first']
    // postedWithin: ['All Listings', 'The last 24 hours', 'The last 7 days', 'The last 30days']
}

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
