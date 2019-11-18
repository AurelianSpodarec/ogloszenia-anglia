import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './../components/Header'
import Footer from './../components/Footer'

import Categories from './../components/Categories'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Container, Grid, Paper, withStyles } from "@material-ui/core";


const styles = theme => ({
    "@global": {
        body: {
            height: "100%",
            margin: 0,
            marginTop: '64px',
        },

    }
});

class Layout extends React.Component {

    render() {
        return (
            <>

                <BrowserRouter>
                    <Header />

                    <Categories />


                    {/* Children */}


                    <Footer />
                </BrowserRouter>


            </>
        )
    }
}

export default withStyles(styles)(Layout);