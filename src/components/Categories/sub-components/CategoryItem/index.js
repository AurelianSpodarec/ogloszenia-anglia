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

import useStyles from './styles'
import CarsView from '../../../../views/Categories/Cars';

const CategoryItem = props => {
    const classes = useStyles();

    return (
        <Grid item>
            <Link exact={props.exact ? true : undefined} to={props.path}>
                <div onClick={props.onSelectCategory} className={classes.categoryLink}>
                    <div className={classes.categoryItem}>
                        <FontAwesomeIcon className={classes.categoryItem__icon} icon={props.icon} />
                    </div>
                    <Typography>{props.label}</Typography>
                </div>
            </Link>
        </Grid>
    )
}

export default CategoryItem;