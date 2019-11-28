import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    makeStyles,
    Grid,
    Card,
    Typography,
    Container,
    CardItem
} from '@material-ui/core';

import { fetchProduct } from './../../../../../services/api/product';

const CarView = ({ match, location }) => {
    const classes = useStyles();
    if (!match || !match.params.id) return;

    const car = fetchProduct("car", parseInt(match.params.id))

    return (
        <Container>

            <h1>{car.name}</h1>

        </Container>
    )
}

export default CarView;