import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import { shortenWord } from './../../../../utils/functions';
import useStyles from './styles'

const CategoryItem = props => {
    const classes = useStyles();

    const category = props.category
    const isActive = props.activeCategory

    return (
        <Grid item>
            <Link to={`/${isActive}`}>
                <div onClick={props.onSelectCategory} className={classes.categoryLink}>
                    {isActive ? "Yes" : "No"}
                    <div className={isActive ? classes.categoryLinkActive : classes.categoryItem}>
                        <FontAwesomeIcon className={classes.categoryItem__icon} icon={category.icon} />
                    </div>
                    <Typography>{category.name}</Typography>

                </div>
            </Link>
            <Route exact path={`/${isActive}`} />
        </Grid>
    )
}

export default CategoryItem;