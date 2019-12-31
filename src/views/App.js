import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

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
import Category from '../components/Categories';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './Layout.css';
import { AuthProvider, useAuthData } from '../context/AuthContext';
// import { AuthProvider, useAuthData } from './../context/AuthContex';


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    }
});

function Layout(props) {
    const authContext = useAuthData()
    return (

        <ThemeProvider theme={theme}>
            {console.log(authContext.authData.name, "sdsdsddss")}
            {authContext.user}

            <Header />
            {authContext.authData.isAuthenticated ? "Logged" : "No"}
            {console.log("adsd", authContext.user)}
            {/* {!authContext.authData.data.data.user.email ? "Hsd" : authContext.authData.data.data.user.email} */}
            <div>
                <Category />
            </div>

            <Footer />

        </ThemeProvider>

    )
}

function App() {


    return (
        <AuthProvider><Layout></Layout></AuthProvider>
    )
}

const styles = theme => ({
    "@global": {
        boxSizing: "borderBox",
        body: {
            height: "100%",
            margin: '0',
            padding: '64px 0 0 0',
        },

    }
});

export default withStyles(styles)(App);

