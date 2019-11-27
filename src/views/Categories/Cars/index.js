import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Card,
} from '@material-ui/core';

import CarItem from './sub-components/CarItem';

// import useStyles from './styles'


const CarsView = function () {
    // const classes = useStyles();

    return (
        <div>


            <h1>Cars</h1>

            <Grid container spacing={1}>
                <Grid item md={3}>
                    <Card>

                    </Card>
                </Grid>
                <Grid item md={9}>
                    <CarItem />
                    <CarItem />
                    <CarItem />
                    <CarItem />
                </Grid>
            </Grid>
        </div>
    )
}

export default CarsView;