import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
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

export default function categoryItem(props) {
    const classes = useStyles();

    return (
        <Grid item>
            <a href={props.link}>

                <div className={classes.categoryItem}>
                    <FontAwesomeIcon className={classes.categoryItem__icon} icon={props.icon} />
                </div>

                <p>{props.name}</p>

            </a>
        </Grid>
    );
}