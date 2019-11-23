import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link } from '@material-ui/core';




const CategoryItem = (props) => {
    const classes = useStyles();
    const data = props.category
    return (
        <Grid item>
            <Link href={data.link}>

                <div className={classes.categoryItem}>
                    <FontAwesomeIcon className={classes.categoryItem__icon} icon={data.icon} />
                </div>

                <p>{data.name}</p>

            </Link>
        </Grid>
    )
}

export default CategoryItem;


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },

    categoryItem: {
        backgroundColor: '#ff9d9d',
        height: '56px',
        width: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        verticalAlign: 'middle',
        color: 'white',
    },
    categoryItem__icon: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
    }
}));