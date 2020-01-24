import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CategoryList from './sub-components/CategoryList';


import CarsView from '../../views/Categories/Cars';
import NotFound from '../../views/NotFound';
import HomesView from '../../views/Categories/Homes';
import DefaultView from '../../views/Categories/Default';
import CarView from '../../views/Categories/Cars/sub-components/CarView';

import AddListing from '../../views/AddListing';
import Profile from '../../views/UserProfile/Profile';
import Settings from '../../views/UserProfile/Settings';

import { categoriesRouter } from './categoriesRouter';

function Category() {
    return (
        <Router>
            <CategoryList categories={categoriesRouter.categories} />

            <Switch>
                <Route exact path="/cars" component={CarsView} />
                <Route path={`/cars/:id`} component={CarView} />

                <Route path="/homes" component={HomesView} />
                <Route path="/free-stuff" component={DefaultView} />
                <Route path="/electronics" component={DefaultView} />
                <Route path="/home-garden" component={DefaultView} />
                <Route path="/cars-motors" component={DefaultView} />
                <Route path="/sports-leasure-games" component={DefaultView} />
                <Route path="/events" component={DefaultView} />
                <Route path="/others" component={DefaultView} />
                <Route path="/services-jobs" component={DefaultView} />

                <Route path="/addlisting" component={AddListing} />
                <Route path="/myprofile" component={Profile} />
                <Route path="/settings" component={Settings} />

                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Category;