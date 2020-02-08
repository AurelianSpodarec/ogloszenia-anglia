import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box } from '@material-ui/core';
import {
    Link,
} from "react-router-dom";

import useStyles from './styles'
import { shortenWord } from '../../../../utils/functions';

const CategoryItem = props => {
    const classes = useStyles();

    return (
        <Grid className={[classes.linkWrap, props.path === window.location.pathname ? null : classes.linkWrapInactive]}>
            <Link className={classes.link} exact={props.exact ? true : undefined} to={props.path}>
                <Box onClick={props.onSelectCategory} className={classes.categoryLink}
                >
                    <Box className={classes.categoryItem} style={{ backgroundColor: props.bgColor }}>
                        <FontAwesomeIcon className={classes.categoryItem__icon} icon={props.icon} />
                    </Box>
                    <Typography className={classes.label}>{shortenWord(props.label, 19)}</Typography>
                </Box>
            </Link>
        </Grid>
    )
}

export default CategoryItem;