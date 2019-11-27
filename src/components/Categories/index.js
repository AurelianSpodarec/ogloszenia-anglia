import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import CategoryItem from './sub-components/CategoryItem/'
import { Grid } from '@material-ui/core'



import CarsView from '../../views/Categories/Cars';

import NotFound from '../../views/NotFound';
import HomesView from '../../views/Categories/Homes';
import DefaultView from '../../views/Categories/Default';

const categories = [
    {
        "label": "Motoryzacja",
        "icon": "car",
        "component": CarsView,
        "exact": true,
        "route": {
            "url": "/motoryzacja",
        }
    },
    {
        "label": "Nieruchomosc",
        "icon": "home",
        "component": DefaultView,
        "route": {
            "url": "/nieruchomosc",
        }
    },
    {
        "label": "Oddam za darmo",
        "icon": "gift",
        "component": DefaultView,
        "route": {
            "url": "/oddam-sa-darmo",
        }
    }
    // {
    //     "label": "Electronika",
    //     "url": "/elektronika",
    //     "color": "default",
    //     "icon": "mobile-alt"
    // },
    // {
    //     "label": "Dom i Ogród",
    //     "url": "/dom-i-ogrod",
    //     "color": "default",
    //     "icon": "couch"
    // },
    // {
    //     "label": "Motocykly i inne pojazdy",
    //     "url": "/motocykly-i-inne-pojazdy",
    //     "color": "default",
    //     "icon": "motorcycle"
    // },
    // {
    //     "label": "Sport, rozrywka, gry",
    //     "url": "/sport-rozrywka-gry",
    //     "color": "default",
    //     "icon": "dumbbell"
    // },
    // {
    //     "label": "Eventy",
    //     "url": "/eventy",
    //     "color": "default",
    //     "icon": "calendar-alt"
    // },
    // {
    //     "label": "Inne",
    //     "url": "/inne",
    //     "color": "default",
    //     "icon": "cubes"
    // },
    // {
    //     "label": "Praca i Serwisy",
    //     "url": "/praca-i-serwisy",
    //     "color": "default",
    //     "icon": "handshake",
    // }
]

function Category() {

    const [activeCategory, setCategory] = useState(false)
    console.log()
    return (
        <Router>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {categories.map(category => {
                    console.log(category)
                    return <CategoryItem
                        key={category.route.url}
                        label={category.label}
                        icon={category.icon}
                        path={category.route.url}
                        component={category.component}
                    />
                })}
            </Grid>

            <Switch>
                {/* <Route exact path="homes" component={HomesView} /> */}
                {/* {categories.map(category => {
                    return <Route exact={category.path ? true : undefined} path={category.path} component={category.component} />
                })} */}
                <Route exact path="/motoryzacja" component={CarsView} />
                <Route path="/nieruchomosc" component={HomesView} />
                <Route path="/oddam-sa-darmo" component={DefaultView} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Category;