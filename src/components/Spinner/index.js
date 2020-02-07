import React from 'react';
import useStyles from './styles';

const Spinner = function (isLoading) {
    const classes = useStyles();

    return (
        <div className={classes.spinner}></div>
    )
}

export default Spinner;