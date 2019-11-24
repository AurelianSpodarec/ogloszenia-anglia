import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

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

function Layout(props) {
    return (

        <>
            <Header />

            <Categories />

            <Router>
                <div>
                    <Route path="/" component={CarsView} />
                </div>
            </Router>

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


