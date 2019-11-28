import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Card,
    Typography,
    Container
} from '@material-ui/core';

import CarItem from './sub-components/CarItem/';
import { fetchProducts } from './../../../services/api/product';

import useStyles from './styles'

const CarsView = function () {
    const classes = useStyles();

    return (
        <Container>

            <Typography>Uzywane auta w Leicester</Typography>

            <Grid container spacing={3}>

                <Grid item md={3}>
                    <Card>
                        <Typography>Posted by</Typography>
                        <FontAwesomeIcon icon="circle-right" />
                    </Card>
                </Grid>
                <Grid item md={9}>

                    {fetchProducts("car").map(car => {
                        return <CarItem key={car.id} car={car} />
                    })}

                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;