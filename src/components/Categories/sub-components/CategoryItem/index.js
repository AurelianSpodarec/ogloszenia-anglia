import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Link, Typography, Box } from '@material-ui/core';

import useStyles from './styles'

const CategoryItem = props => {
    const classes = useStyles();
    const data = props.category

    return (
        <Grid item>
            <Link className={classes.categoryLink} href={data.link}>

                <Box className={classes.categoryItem}>
                    <FontAwesomeIcon className={classes.categoryItem__icon} icon={data.icon} />
                </Box>
                <Typography>{data.name}</Typography>

            </Link>
        </Grid>
    )
}

export default CategoryItem;