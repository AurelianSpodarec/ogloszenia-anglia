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



const categories = [
    {
        "name": "Motoryzacja",
        "path": "/motoryzacja",
        "color": "default",
        "icon": "car",
        "component": CarsView
    },
    {
        "component": NotFound
    },
    {
        "name": "Nieruchomosc",
        "path": "/nieruchomosc",
        "color": "default",
        "icon": "home"
    },
    {
        "name": "Oddam za darmo",
        "path": "/oddam-sa-darmo",
        "color": "default",
        "icon": "gift"
    },
    {
        "name": "Electronika",
        "path": "/elektronika",
        "color": "default",
        "icon": "mobile-alt"
    },
    {
        "name": "Dom i Ogród",
        "path": "/dom-i-ogrod",
        "color": "default",
        "icon": "couch"
    },
    {
        "name": "Motocykly i inne pojazdy",
        "path": "/motocykly-i-inne-pojazdy",
        "color": "default",
        "icon": "motorcycle"
    },
    {
        "name": "Sport, rozrywka, gry",
        "path": "/sport-rozrywka-gry",
        "color": "default",
        "icon": "dumbbell"
    },
    {
        "name": "Eventy",
        "path": "/eventy",
        "color": "default",
        "icon": "calendar-alt"
    },
    {
        "name": "Inne",
        "path": "/inne",
        "color": "default",
        "icon": "cubes"
    },
    {
        "name": "Praca i Serwisy",
        "path": "/praca-i-serwisy",
        "color": "default",
        "icon": "handshake",
    }
]

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
                {categories.map(category => (
                    <CategoryItem
                        category={category}
                        activeCategory={activeCategory === category.link}
                        onSelectCategory={() => { setCategory(category.link) }}
                        key={category.link}
                    />
                ))}
                <Switch>

                    {categories.map((path, component) => {
                        <Route path={path} component={component} />
                    })}

                    {/* <Route exact path="/" component={CarsView} />
                    <Route path="/cars" component={CarsView} />
                    <Route path="/homes" component={HomesView} />
                    <Route component={NotFound} /> */}
                </Switch>

                {/* <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cars">Cars</Link>
                    </li>
                    <li>
                        <Link to="/homes">Homes</Link>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route exact path="/" component={CarsView} />
                        <Route path="/cars" component={CarsView} />
                        <Route path="/homes" component={HomesView} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router> */}



            </Grid>
        </Router>
    )
}

export default Category;