import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Container,
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase
} from '@material-ui/core';

import useStyles from './styles'

const Footer = function () {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container>
                <Typography>Ogloszenia Anglia</Typography>
            </Container>
        </div>

    )
}

export default Footer;