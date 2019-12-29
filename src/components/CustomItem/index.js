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


const CustomItem = ({ label, search }) => {
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


    // const onSearch = function (event, userInput) {
    //     setSearchQuery(event.target.value)
    // }

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
    // const [isSearch, setIsSearch] = useState(false);
    // const anchorRef = React.useRef(null);
    //  1 - User clicks item 
    //     1.1 - It opens the menu
    //     1.2 - It closes the menu
    // 
    //  2 - User clicks menu item
    //      2.1 - If its not multiselect, on select close menu OR click away
    //      2.2 - If its multiselect, select multiple values without closing OR click away
    //      2.3 - If search bar is clicked, don't close the menu

    const onToggleMenu = () => {
        setMenuOpen(prevOpen => !menuOpen)
    }

    const handleClose = event => {
        console.log("Close", event)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuOpen(false)
        // if (!event.target === menuOpen) {
        // }
    }

    const onTabPress = event => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenuOpen(false)
        }
    }

    const prevOpen = React.useRef(menuOpen);
    useEffect(() => {
        if (prevOpen.current === true && menuOpen === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = menuOpen;
    }, [menuOpen]);

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
                                // value={searchQuery}
                                // onChange={onSearch}
                                />
                            </Box>
                            : null}
                        {/* Children */}
                        <Box onKeyDown={onTabPress} className={classes.customItemContent}>
                            <Typography>Mike</Typography>
                        </Box>
                    </Box>
                </ClickAwayListener>
            </Card>

            {/* 
            <Card className={classes.menu} style={{ display: isOpen ? 'block' : 'none' }}>
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
            {/* <Box onClick={() => multiSelectValue ? setisOpen(true) : setisOpen(false)} className={classes.searchMenu}>
                    {
                        menu.map(item => {
                            return (
                                <Box className={classes.item} onClick={() => onClickItem(item.name)} value={item.name}>
                                    <Typography>{item.displayName}</Typography>
                                </Box>
                            )
                        })
                    }
                </Box> */}
            {/* </Card> */}
        </Box >
    )
}

export default CustomItem;