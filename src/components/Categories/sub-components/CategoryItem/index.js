import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Link, Typography, Box } from '@material-ui/core';

// import { shortenWord } from './../../../../utils/functions';
import useStyles from './styles'

const CategoryItem = props => {
    const classes = useStyles();

    const category = props.category
    const isActive = props.activeCategory

    return (
        <Grid item>
            <Link onClick={props.onSelectCategory} className={classes.categoryLink} title={category.name}>
                {isActive ? "Yes" : "No"}
                <div className={isActive ? classes.categoryLinkActive : classes.categoryItem}>
                    <FontAwesomeIcon className={classes.categoryItem__icon} icon={category.icon} />
                </div>
                <Typography>{category.name}</Typography>

            </Link>
        </Grid>
    )
}

export default CategoryItem;