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

// const carsListing = [
//     {
//         "car": "Volvo",
//     },
//     {
//         "car": "BMW"
//     },
// ]

// const categoriesMenu = [
//     {
//         "name": "Motoryzacja",
//         "link": "motoryzacja",
//         "color": "default",
//         "icon": "car",
//         "component": CarsView
//     },
//     {
//         "name": "Nieruchomosc",
//         "link": "nieruchomosc",
//         "color": "default",
//         "icon": "home"
//     },
//     {
//         "name": "Oddam za darmo",
//         "link": "oddam-sa-darmo",
//         "color": "default",
//         "icon": "gift"
//     },
//     {
//         "name": "Electronika",
//         "link": "elektronika",
//         "color": "default",
//         "icon": "mobile-alt"
//     },
//     {
//         "name": "Dom i Ogród",
//         "link": "dom-i-ogrod",
//         "color": "default",
//         "icon": "couch"
//     },
//     {
//         "name": "Motocykly i inne pojazdy",
//         "link": "motocykly-i-inne-pojazdy",
//         "color": "default",
//         "icon": "motorcycle"
//     },
//     {
//         "name": "Sport, rozrywka, gry",
//         "link": "sport-rozrywka-gry",
//         "color": "default",
//         "icon": "dumbbell"
//     },
//     {
//         "name": "Eventy",
//         "link": "eventy",
//         "color": "default",
//         "icon": "calendar-alt"
//     },
//     {
//         "name": "Inne",
//         "link": "inne",
//         "color": "default",
//         "icon": "cubes"
//     },
//     {
//         "name": "Praca i Serwisy",
//         "link": "praca-i-serwisy",
//         "color": "default",
//         "icon": "handshake",
//     }
// ]

// // This different file
// const CategoryItem = function (props) {
//     const category = props.category
//     return (
//         <Link to={category.link}>
//             <h4>{category.name}</h4>
//         </Link>
//     )
// }


function Layout(props) {
    return (

        <>
            <Header />

            <Category />

            <Container>
                <CarsView />
            </Container>


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


