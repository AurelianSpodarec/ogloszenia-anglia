import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box } from '@material-ui/core';
// import CarsView from './../../../views/Categories/Cars';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import { shortenWord } from './../../../../utils/functions';
import useStyles from './styles'
import CarsView from '../../../../views/Categories/Cars';

const CategoryItem = props => {
    const classes = useStyles();

    const category = props.category
    const isActive = props.activeCategory

    return (
        <Grid item>
            {/* <Link to={`/${isActive}`}> */}
            <Router>
                <Link to="/cars">
                    <div onClick={props.onSelectCategory} className={classes.categoryLink}>
                        {isActive ? "Yes" : "No"}
                        <div className={isActive ? classes.categoryLinkActive : classes.categoryItem}>
                            <FontAwesomeIcon className={classes.categoryItem__icon} icon={category.icon} />
                        </div>
                        <Typography>{category.name}</Typography>

                    </div>
                </Link>

            </Router>

        </Grid>
    )
}

export default CategoryItem;