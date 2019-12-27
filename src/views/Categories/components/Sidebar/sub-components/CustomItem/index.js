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



//TODO: Functionality to add: Toggle between check boxes and single select
const CustomItem = ({ name, value, search, selectedLimit }) => {
    const classes = useStyles();

    const [selected, setSelected] = React.useState([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    let [searchQuery, setSearcyQuery] = React.useState([]);
    let [searchResult, setSearchResult] = React.useState([]);

    const result = placeholderCarFilter[value] || [];

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

    const onSearch = function () {
        // let searchDisplay = selected.find()
    }

    const onToggleMenu = function () {

    }

    return (
        <Box onClick={() => setIsMenuOpen(!isMenuOpen)} className={[classes.item, classes.itemMenu]}>

            <Typography className={classes.itemTitle}>{name}</Typography>
            <Box className={classes.itemMoreInfo}>
                <Typography>{label}</Typography>
                <FontAwesomeIcon icon="angle-right" />
            </Box>

            <Card className={classes.menu} style={{ display: isMenuOpen ? 'block' : 'none' }}>
                {search ?
                    <Box>
                        <TextField
                            fullWidth
                            placeholder="Search makes"
                            variant="outlined"
                        />
                        {/* <TextField
                            fullWidth
                            name="search"
                            type="text"
                            value={search.email}
                            id="input-with-icon-grid"
                            label="Search"
                            onChange={onSearch}
                        /> */}
                    </Box>
                    : null}
                {
                    result.map(item => {
                        return (
                            <Box className={classes.item} onClick={() => onClickSelected(item.name)} value={item.name}>
                                <Typography>{item.name}</Typography>
                            </Box>
                        )
                    })
                }
            </Card>
        </Box>
    )
}

export default CustomItem;