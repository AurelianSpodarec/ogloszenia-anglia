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
// All Possibilities
// 
// Posted By: ["All", "Individual", "Dealership"]
// Body Style: ["All", "Sedan", "Hybrid", "Convertible", "Truck", "Coupe", "Hatchback", "Minivan", "Wagon", "SUV", "Others"]
// Transmision: ["All", "Automatic", "Manual"]
// Fuel: ["Disel", "Electric", "Flex", "Gas", "Hybrid"]
// Drivetrain: ["4WD", "AWD", "FWD", "RWD"]
// 
// Car Post

// DB

// Users
// Posts
// Categories: Cars, Homes, etc
// Single Product view: Full JSON
// Product Listing view: Some JSON
// Location? 
// Reviews

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
            <Typography>Uzywane auta w Leicester</Typography>
            {console.log(data)}
            <Grid container spacing={3}>

                <Grid item md={3}>
                    <Sidebar />
                </Grid>

                <Grid item md={9}>
                    {data.map(car => {
                        return <CarItem key={car._id} car={car} />
                    })}
                    {/* <CarList data={data.hits} /> */}

                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;
