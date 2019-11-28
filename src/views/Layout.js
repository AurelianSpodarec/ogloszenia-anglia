import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import Header from './../components/Header'
import Footer from './../components/Footer'
import Categories from './../components/Categories'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Container,
    Grid,
    Paper,
    withStyles
} from "@material-ui/core";

import CarsView from './Categories/Cars';
import HomesView from './Categories/Homes';
import NotFound from './NotFound';
import Category from './../components/Categories';


function Layout(props) {
    return (

        <>
            <Header />

            <Category />

            <Footer />
        </>
    )
}

const styles = theme => ({
    "@global": {
        body: {
            height: "100%",
            margin: '64px 0 0 0',
        },

    }
});

export default withStyles(styles)(Layout);


