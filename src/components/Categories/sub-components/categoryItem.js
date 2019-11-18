import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
}));

const categoryItem = (props) => {
    // const classes = useStyles();

    return (
        <Grid item >
            <a href={props.link}>

                <div style={{ "backgroundColor": "red", "height": "56px", "width": "56px", "textAlign": "center" }}>
                    <FontAwesomeIcon icon={props.icon} />
                </div>

                <p>{props.name}</p>

            </a>
        </Grid>
    )
}

export default categoryItem;