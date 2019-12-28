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

import { shortenWord } from './../../utils/functions';


const CustomItem = ({ data, name, value, search, multiSelect }) => {
    const classes = useStyles();

    const [selected, setSelected] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let [menu, setMenu] = useState(data[value] || []);
    let [searchQuery, setSearchQuery] = useState();
    const [multiSelectValue, setmltiSelectValue] = useState(multiSelect)
    const result = data[value] || [];

    let label;
    if (selected.length === 0 || selected.length === menu.length) {
        label = "All";
    } else {
        label = multiSelectValue ? shortenWord(selected.join(", "), 20) : selected;
    }

    const onClickSelected = function (selectedItemName) {
        if (multiSelectValue) {
            const isSelected = selected.find(item => item === selectedItemName);
            if (isSelected === selectedItemName) {
                setSelected(selected.filter(item => item !== selectedItemName))
            } else {
                setSelected(selected => [...selected, selectedItemName])
            }
        } else {
            setSelected(selectedItemName)
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

    const onClickItem = (itemName) => {
        if (!multiSelectValue) {
            setIsMenuOpen(false)
            console.log("Fied in")
        } else {
            console.log("fied out")
        }
        onClickSelected(itemName)
    }

    const onOpenMenu = function () {
        // Is menu open and multiselect, don't trigger the open menu again
        if (!isMenuOpen) {
            setIsMenuOpen(!isMenuOpen)
        }

        // If menu is open, and its not clicked, close it
    }

    {/* DISABLED untill soemthing else is selected and load the data*/ }
    console.log(isMenuOpen)
    return (
        <Box onClick={() => onOpenMenu(true)} className={[classes.item, classes.itemMenu]}>

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

                {/* If multiselect TRUE: Onclick don't close menu */}
                {/* If multiselect FALSE: Onclick 'item' close menu */}
                <Box onClick={() => multiSelectValue ? setIsMenuOpen(true) : setIsMenuOpen(false)} className={classes.searchMenu}>
                    {
                        menu.map(item => {
                            return (
                                <Box className={classes.item} onClick={() => onClickItem(item.name)} value={item.name}>
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