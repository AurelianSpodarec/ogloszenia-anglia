import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {
    Grid,
    Card,
    Typography,
    Container,
    Toolbar,
    Slider,
    Tooltip,
    Button,
    TextField,
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomSlider = function ({ label, min, max, onChange, value }) {
    const classes = useStyles();

    return (
        <Box className={classes.item} >
            <Box className={classes.itemSliderInfo}>
                <Typography className={classes.itemTitle}>{label}</Typography>
                <Typography>{value[0]}-{value[1]}</Typography>
                {/* Add before and after */}
            </Box>
            <Slider
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                aria-labelledby="range-slider"
            />
        </Box>
    )
}

export default CustomSlider;