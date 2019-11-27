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
    console.log("lksdls", props.exact)
    return (
        <Grid item>
            {/* <Link to={`/${isActive}`}> */}

            {/* <Link to="/cars"> */}
            {/* <div onClick={props.onSelectCategory} className={classes.categoryLink}>
                    {isActive ? "Yes" : "No"}
                    <div className={isActive ? classes.categoryLinkActive : classes.categoryItem}>
                        <FontAwesomeIcon className={classes.categoryItem__icon} icon={category.icon} />
                    </div>
                    <Typography>{category.name}</Typography>

                </div>
            // </Link> */}

            <Link exact={props.exact ? true : undefined} to={props.path}>
                <div onClick={props.onSelectCategory} className={classes.categoryLink}>
                    <div>
                        <FontAwesomeIcon className={classes.categoryItem__icon} icon={props.icon} />
                    </div>
                    <Typography>{props.label}</Typography>
                </div>
            </Link>
            {/* <Typography>{props.label}</Typography> */}

        </Grid>
    )
}

export default CategoryItem;