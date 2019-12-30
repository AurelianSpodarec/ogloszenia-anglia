import React, { useState, useEffect, useRef } from 'react';

import {
    Card,
    Typography,
    TextField,
    Box,
    ClickAwayListener,
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shortenWord } from './../../utils/functions';

import useStyles from './styles';


const CustomItem = ({ label, search, data, icon, value, multiSelect, onClick, disabled }) => {
    const classes = useStyles();

    let [menu, setMenu] = useState(data || []);


    let [searchQuery, setSearchQuery] = useState();
    let [selected, setSelected] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    const anchorRef = useRef(null);


    const onSearch = function (event, userInput) {
        setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    useEffect(() => {
        if (searchQuery) {
            const filteredResult = menu.filter(item => item.name.includes(searchQuery.toString().toLowerCase()))
            setMenu(filteredResult)
        } else {
            setMenu(data)
        }
        // TODO:If nothing matches, display: Not found
    }, [searchQuery])

    const onToggleMenu = () => {
        if (!disabled) { setMenuOpen(prevOpen => !menuOpen) }
    }

    const handleClose = event => {
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


    //TODO: This has a bug when the first element index is 0, it it makes it false, insead of checking if its empty
    let labelValue;
    console.log(selected, selected.length === 0)
    if (!selected.length || selected.length === data.length) {
        labelValue = "All";
    } else {
        labelValue = multiSelect ? shortenWord(selected.join(", "), 20) : selected;
    }

    const onClickMenuItem = (e, value) => {
        console.log((value))
        onClick(e, value)
        if (multiSelect === undefined) {
            setSelected(value.name || value)
            onMenuClose()
        } else {
            const isSelected = selected.find(item => item === value || item === value.name);
            if (isSelected === value.name || isSelected === value) {
                setSelected(selected.filter(item => item !== value && item !== value.name))
            } else {
                setSelected(selected => [...selected, value.name ? value.name : value])
            }
        }
    }


    return (

        <Box className={[classes.customItem]}>


            <Box ref={anchorRef} className={classes.customItemContent} onClick={onToggleMenu}>

                <Typography className={[classes.itemTitle, disabled ? classes.itemTitleDisabled : null]}>{label}</Typography>
                <Box className={classes.itemMoreInfo}>
                    {disabled ? null :
                        <Typography>{labelValue}</Typography>
                    }
                    <FontAwesomeIcon icon="angle-right" />


                </Box>

            </Box>
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

                        {menu && menu.map(item => {
                            return (
                                <Box onClick={(e) => onClickMenuItem(e, item)} value={item.name || item} onKeyDown={onTabPress} className={classes.customItemContent}>
                                    {/* <Box onClick={(e) => onClick(e, item.name)} value="BB"> */}
                                    <Typography>{item.displayName || item}</Typography>
                                </Box>
                            )
                        })}

                    </Box>
                </ClickAwayListener>
            </Card>
        </Box >
    )
}

export default CustomItem;