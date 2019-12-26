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
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { placeholderCarFilter } from './../../menu';
import { shortenWord } from '../../../../../../utils/functions';



//TODO: Functionality to add: Toggle between check boxes and single select
const CustomItem = ({ name, value }) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const result = placeholderCarFilter[value] || [];
    console.log(result)

    let label;
    if (selected.length === 0 || selected.length === result.length) {
        label = "All";
    } else {
        label = shortenWord(selected.join(", "), 20)
    }

    const onClickSelected = function (selectedItemName) {
        const isSelected = selected.find(item => item === selectedItemName);
        if (isSelected === selectedItemName) {
            setSelected(selected.filter(item => item !== selectedItemName))
        } else {
            setSelected(selected => [...selected, selectedItemName])
        }
    }

    return (
        <Box className={[classes.item, classes.itemMenu]}>

            <Typography className={classes.itemTitle}>{name}</Typography>
            <Box className={classes.itemMoreInfo}>
                <Typography>{label}</Typography>
                <FontAwesomeIcon icon="angle-right" />
            </Box>

            <Box className={classes.menu}>
                {
                    result.map(item => {
                        return (
                            <Box onClick={() => onClickSelected(item.name)} value={item.name}>
                                <Typography>{item.name}</Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default CustomItem;