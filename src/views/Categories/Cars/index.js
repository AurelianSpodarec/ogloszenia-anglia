import React from 'react';
import { Link, Switch, Router, Route, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Card,
    Typography,
    Container,
    CardItem
} from '@material-ui/core';

import CarItem from './sub-components/CarItem/';
import CarView from './sub-components/CarView/';
import { fetchProducts, fetchProduct } from './../../../services/api/product';

import useStyles from './styles'


const CarsView = function () {
    const classes = useStyles();
    let { path } = useRouteMatch();

    return (
        <Container>


            <h1>Cars</h1>

            <Grid container spacing={3}>

                <Grid item md={3}>
                    <Card>
                        <Typography>Posted by</Typography>
                        <FontAwesomeIcon icon="circle-right" />
                    </Card>
                </Grid>
                <Grid item md={9}>

                    {fetchProducts("car").map(car => {
                        return <CarItem car={car} />
                    })}

                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;