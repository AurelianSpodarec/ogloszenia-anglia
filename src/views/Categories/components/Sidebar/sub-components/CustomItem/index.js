import React, { useState, useEffect } from 'react';
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
    let [menu, setMenu] = useState(placeholderCarFilter[value] || []);
    let [searchQuery, setSearchQuery] = React.useState();
    let [searchResults, setSearchResults] = React.useState([]);
    console.log(menu)
    // const menu = function() {
    const result = placeholderCarFilter[value] || [];
    //     setMenu(result)
    // }


    let label;
    if (selected.length === 0 || selected.length === menu.length) {
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

    const onSearch = function (event, userInput) {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {
        if (!searchQuery) {
            setMenu(result)
        } else {
            console.log(searchQuery.toString().toLowerCase())
            const filteredResult = result.filter(item => item.name.includes(searchQuery.toString().toLowerCase()))
            setMenu(filteredResult);
        }
    }, [searchQuery])

    return (
        <Box onClick={() => setIsMenuOpen(true)} className={[classes.item, classes.itemMenu]}>

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
                            value={searchQuery}
                            onChange={onSearch}
                        />
                    </Box>
                    : null}
                <Box className={classes.searchMenu}>
                    {
                        menu.map(item => {
                            return (
                                <Box className={classes.item} onClick={() => onClickSelected(item.name)} value={item.name}>
                                    <Typography>{item.displayName}</Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Card>
        </Box>
    )
}

export default CustomItem;