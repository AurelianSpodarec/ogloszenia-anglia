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
import CarView from '../../views/Categories/Cars/sub-components/CarView';

const router = {
    menu: [
        {
            "label": "Dashboard",
            "route": {
                "url": "/dashboard"
            }
        }
    ],
    categories: [
        {
            "label": "Motoryzacja",
            "icon": "car",
            "component": CarsView,
            "exact": true,
            "route": {
                "url": "/motoryzacja",
            }
        },
        // {
        //     "component": CarView,
        //     "route": {
        //         "url": "/motoryzacja/:carID",
        //     }
        // },
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
        },
        {
            "label": "Electronika",
            "color": "default",
            "icon": "mobile-alt",
            "component": DefaultView,
            "route": {
                "url": "/elektronika",
            }
        },
        {
            "label": "Dom i Ogród",
            "color": "default",
            "icon": "couch",
            "component": DefaultView,
            "route": {
                "url": "/dom-i-ogrod",
            }
        },
        {
            "label": "Motocykly i inne pojazdy",
            "color": "default",
            "icon": "motorcycle",
            "component": DefaultView,
            "route": {
                "url": "/motocykly-i-inne-pojazdy",
            }
        },
        {
            "label": "Sport, rozrywka, gry",
            "color": "default",
            "icon": "dumbbell",
            "component": DefaultView,
            "route": {
                "url": "/sport-rozrywka-gry",
            }
        },
        {
            "label": "Eventy",
            "color": "default",
            "icon": "calendar-alt",
            "component": DefaultView,
            "route": {
                "url": "/eventy",
            }
        },
        {
            "label": "Inne",
            "color": "default",
            "icon": "cubes",
            "component": DefaultView,
            "route": {
                "url": "/inne",
            }
        },
        {
            "label": "Praca i Serwisy",
            "color": "default",
            "icon": "handshake",
            "component": DefaultView,
            "route": {
                "url": "/praca-i-serwisy",
            }
        }
    ]

}

function Category() {

    const [activeCategory, setCategory] = useState(false)
    return (
        <Router>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {router.categories.map(category => {
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
                <Route path={`/motoryzacja/:id`} component={CarView} />

                <Route path="/nieruchomosc" component={HomesView} />
                <Route path="/oddam-sa-darmo" component={DefaultView} />
                <Route path="/elektronika" component={DefaultView} />
                <Route path="/dom-i-ogrod" component={DefaultView} />
                <Route path="/motocykly-i-inne-pojazdy" component={DefaultView} />
                <Route path="/sport-rozrywka-gry" component={DefaultView} />
                <Route path="/eventy" component={DefaultView} />
                <Route path="/inne" component={DefaultView} />
                <Route path="/praca-i-serwisy" component={DefaultView} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Category;