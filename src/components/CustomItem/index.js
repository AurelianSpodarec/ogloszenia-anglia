import React, { useState, useEffect, useRef } from 'react';
import {
    Card,
    Typography,
    TextField,
    Box,
    ClickAwayListener,
} from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { shortenWord } from './../../utils/functions';




//  1 - User clicks item 
//     1.1 - It opens the menu
//     1.2 - It closes the menu
// 
//  2 - User clicks menu item
//      2.1 - If its not multiselect, on select close menu OR click away
//      2.2 - If its multiselect, select multiple values without closing OR click away
//      2.3 - If search bar is clicked, don't close the menu


const CustomItem = ({ label, search, data, icon, multiSelect }) => {
    const classes = useStyles();


    // const [selected, setSelected] = useState([]);
    // const [isOpen, setisOpen] = useState(false);
    // let [menu, setMenu] = useState(data[value] || []);
    // let [searchQuery, setSearchQuery] = useState();
    // const [multiSelectValue, setmltiSelectValue] = useState(multiSelect)
    // const result = data[value] || [];

    // let label;
    // if (selected.length === 0 || selected.length === menu.length) {
    //     label = "All";
    // } else {
    //     label = multiSelectValue ? shortenWord(selected.join(", "), 20) : selected;
    // }

    // const onClickSelected = function (selectedItemName) {
    //     if (multiSelectValue) {
    //         const isSelected = selected.find(item => item === selectedItemName);
    //         if (isSelected === selectedItemName) {
    //             setSelected(selected.filter(item => item !== selectedItemName))
    //         } else {
    //             setSelected(selected => [...selected, selectedItemName])
    //         }
    //     } else {
    //         setSelected(selectedItemName)
    //     }

    // }


    const onSearch = function (event, userInput) {
        setSearchQuery(event.target.value)
    }

    // useEffect(() => {
    //     if (!searchQuery) {
    //         setMenu(result)
    //     } else {
    //         console.log(searchQuery.toString().toLowerCase())
    //         const filteredResult = result.filter(item => item.name.includes(searchQuery.toString().toLowerCase()))
    //         setMenu(filteredResult);
    //     }
    // }, [searchQuery])



    {/* DISABLED untill soemthing else is selected and load the data*/ }

    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);
    let [searchQuery, setSearchQuery] = useState();
    let [menu, setMenu] = useState(data || []);

    // let menuData = data
    // // If use search
    // useEffect(() => {
    //     if (searchQuery) {
    //         // menuData = data
    //         menuData = menu.filter(item => item.name.includes(searchQuery.toString().toLowerCase()))
    //     } else if (searchQuery) {
    //     } else {
    //         menuData = "No results found :("// No result found
    //     }
    // }, [searchQuery])
    // const multiSelect


    const onToggleMenu = () => {
        setMenuOpen(prevOpen => !menuOpen)
    }

    const handleClose = event => {
        console.log("Close", event)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuOpen(false)
    }

    const onTabPress = event => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenuOpen(false)
        }
    }


    const onMenuOpen = function () {
        setMenuOpen(true)
    }

    const onMenuClose = function () {
        setMenuOpen(false)
    }

    const prevOpen = React.useRef(menuOpen);
    useEffect(() => {
        if (prevOpen.current === true && menuOpen === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = menuOpen;
    }, [menuOpen]);
    console.log(multiSelect)
    return (

        <Box className={[classes.customItem]}>


            <Box ref={anchorRef} className={classes.customItemContent} onClick={onToggleMenu}>

                <Typography className={classes.itemTitle}>{label}</Typography>
                <Box className={classes.itemMoreInfo}>
                    <Typography>Aa</Typography>
                    <FontAwesomeIcon icon="angle-right" />
                </Box>

            </Box>
            {console.log(anchorRef)}
            <Card anchorEl={anchorRef.current} className={classes.customItemMenu} style={{ display: menuOpen ? 'block' : 'none' }}>
                <ClickAwayListener onClickAway={handleClose}>
                    <Box>
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
                        {/* Put data in search state, up */}

                        {data && data.map(item => {
                            return (
                                <Box onClick={multiSelect === undefined ? onMenuClose : null} value={item.name} onKeyDown={onTabPress} className={classes.customItemContent}>
                                    <Typography>{item.displayName}</Typography>
                                </Box>
                            )
                        })};

                    </Box>
                </ClickAwayListener>
            </Card>
        </Box >
    )
}

export default CustomItem;