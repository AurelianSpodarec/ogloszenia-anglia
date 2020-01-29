import React, { useState, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Typography,
    Container
} from '@material-ui/core';
import CarItem from './sub-components/CarItem';
import PageTitle from '../components/Title';

import { CarListContext } from '../../../context/CarsListContext';

import useStyles from './styles'

const ProductItem = function (props) {
    const classes = useStyles();

    return (
        <h1>Hello Product item</h1>
    )
}

export default ProductItem;