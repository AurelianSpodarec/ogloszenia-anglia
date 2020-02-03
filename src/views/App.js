import React from 'react';

import {
    Header,
    Footer,
    Categories
} from '../components';

import { withStyles } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider, useAuthData } from '../context/AuthContext';
import { CarListProvider } from './../context/CarsListContext';

import './App.css';


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

            <Header />
            <Categories />
            <Footer />

        </ThemeProvider>

    )
}

function App() {

    document.title = "Buba Classified Ads"
    return (
        <AuthProvider>
            {/* <SearchProvider value={'currentSearch'}> */}
            <CarListProvider>
                <Layout></Layout>
            </CarListProvider>
        </AuthProvider>
    )
}

const styles = theme => ({
    "@global": {
        boxSizing: "borderBox",
        body: {
            height: "100%",
            margin: '0',
            padding: '64px 0 0 0',
            background: '#f1f1f1',
        },

    }
});

export default withStyles(styles)(App);


