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

import { placeholderCarFilter } from './../../menu';
import { shortenWord } from '../../../../../../utils/functions';


const CustomSlider = function (props) {
    const classes = useStyles();
    const [values, setValues] = useState([placeholderCarFilter[props.value][0], placeholderCarFilter[props.value][1]]);

    const onValueChange = function (event, newValues) {
        setValues(newValues)
    }


    return (
        <Box className={classes.item} >
            <Box className={classes.itemSliderInfo}>
                <Typography className={classes.itemTitle}>{props.name}</Typography>
                <Typography>{values[0]}-{values[1]}</Typography>
                {/* Add before and after */}
            </Box>
            <Slider
                min={placeholderCarFilter[props.value][0]}
                max={placeholderCarFilter[props.value][1]}
                value={values}
                onChange={onValueChange}
                aria-labelledby="range-slider"
            />
        </Box>
    )
}

export default CustomSlider;