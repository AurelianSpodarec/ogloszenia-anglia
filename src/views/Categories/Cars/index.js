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

// import useStyles from './styles'

const carList = [
    {
        "userId": 1,
        "carId": 5,
        "price": 34000,
        "name": "My fast GT car - 1year old",
        "brand": "Mitsubishi",
        "model": "3000 GT",
        "bodyStyle": "Hybrid",
        "transmision": "Automatic",
        "fuel": "Electric",
        "media": [
            {
                "id": 1,
                "img": "https://thumbs.img-sprzedajemy.pl/1000x901c/0a/2e/52/mitsubishi-3000gt-gto-jdm-3000gt-malopolskie-tarnow-488612276.jpg"
            },
            {
                "id": 2,
                "img": "https://meganracing.com/media/catalog/product/cache/6e104eba86855cb02bc9374335d46b7c/m/r/mr-ls-m3gt-2.jpg"
            }
        ]
    },
    {
        "userId": 14,
        "carId": 22,
        "price": 89500,
        "name": "Cheap SUV",
        "brand": "SUV",
        "model": "Rover",
        "bodyStyle": "Truck",
        "transmision": "Automatic",
        "fuel": "Gas",
        "media": [
            {
                "id": 1,
                "img": "https://cdn.motor1.com/images/mgl/eLqQM/s1/2019-range-rover-sentinel.jpg"
            },
        ]
    },

]

const CarsView = function () {
    // const classes = useStyles();
    let { path } = useRouteMatch();

    return (
        <Container>


            <h1>Cars</h1>

            <Grid container spacing={3}>

                <Grid item md={3}>
                    <Card>
                        <Typography>Posted by</Typography>
                        <FontAwesomeIcon icon="circle-right-alt" />
                    </Card>
                </Grid>
                <Grid item md={9}>

                    {carList.map(car => {
                        return <CarItem car={car} />
                    })}

                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;