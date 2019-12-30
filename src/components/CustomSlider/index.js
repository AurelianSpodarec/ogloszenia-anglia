import React from 'react';
import {
    Typography,
    Slider,
    Box,
} from '@material-ui/core';
import useStyles from './styles';

const CustomSlider = function ({ label, min, max, onChange, value, valueMatchLabel, labelRight, leftBeforeSlideMaxLabel }) {
    const classes = useStyles();

    let values;
    if (valueMatchLabel && value[0] === min && value[1] === max) {
        values = valueMatchLabel
    } else {
        values = `${value[0]}-${value[1]} ${labelRight ? labelRight : ""}`
    }

    return (
        <Box className={classes.item} >
            <Box className={classes.itemSliderInfo}>
                <Typography className={classes.itemTitle}>{label}</Typography>
                <Typography>{values}</Typography>
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