import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Card,
    Typography,
    Container,
    CardItem
} from '@material-ui/core';

// import useStyles from './styles'

const CarView = ({ car, match, location }) => {
    // const classes = useStyles();
    const { params:
        {
            carId,
            name
        }
    } = match;
    console.log(car)
    console.log(match, location, carId)
    return (
        <Container>


            <h1>{carId}{name}</h1>


        </Container>
    )
}

export default CarView;