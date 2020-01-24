import React from 'react';

// import { } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box } from '@material-ui/core';
// import CarsView from './../../../views/Categories/Cars';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams, useRouteMatch
} from "react-router-dom";

import useStyles from './styles'
import CarsView from '../../../../views/Categories/Cars';
import { shortenWord } from '../../../../utils/functions';


const lightenColor = (color, number) => {

}

const CategoryItem = props => {
    const classes = useStyles();
    let { id } = useParams();

    return (
        <Grid className={classes.linkWrap} style={props.path === window.location.pathname ? null : { "opacity": 0.3 }}>
            <Link className={classes.link} exact={props.exact ? true : undefined} to={props.path}>
                {console.log("sdsd", id)}
                <div onClick={props.onSelectCategory} className={classes.categoryLink}
                >
                    <div className={classes.categoryItem} style={{ backgroundColor: props.bgColor }}>
                        <FontAwesomeIcon className={classes.categoryItem__icon} icon={props.icon} />
                    </div>
                    <Typography className={classes.label}>{shortenWord(props.label, 19)}</Typography>
                </div>
            </Link>
        </Grid>
    )
}

export default CategoryItem;