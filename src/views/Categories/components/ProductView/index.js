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

const ProductView = function (props) {
    const classes = useStyles();

    return (
        <h1>Hello Product View</h1>
    )
}

export default ProductView;