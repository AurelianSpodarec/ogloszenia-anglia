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

    let [selected, setSelected] = useState();
    let [multiSelected, setMultiSelected] = useState([])

    const [menuOpen, setMenuOpen] = useState(false);

    const anchorRef = useRef(null);


    const onSearch = function (event, userInput) {
        setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    useEffect(() => {
        setMenu(data)
    })

    useEffect(() => {
        if (searchQuery) {
            // TODO: Fix the search
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


    let labelValue;
    if (multiSelect) {
        if (multiSelected.length === 0 || multiSelected.length === data.length) {
            labelValue = "All"
        } else {
            labelValue = shortenWord(multiSelected.join(", "), 20);
        }
    } else {
        if (selected === undefined) {
            labelValue = "All"
        } else {
            labelValue = selected;
        }
    }



    const onClickMenuItem = (e, value) => {
        console.log("CLick menu item", value)
        onClick(e, value)

        if (multiSelect) {

            const isSelected = multiSelected.find(item => item === value || item === value.slug);
            if (isSelected === value.slug || isSelected === value) {
                setMultiSelected(multiSelected.filter(item => item !== value && item !== value.slug))
            } else {
                setMultiSelected(multiSelected => [...multiSelected, value.slug ? value.slug : value])
            }

        } else {
            setMenuOpen(false)
            setSelected(value.slug ? value.slug : value)
        }

    }


    return (

        <Box className={[classes.customItem]}>


            <Box ref={anchorRef} className={[classes.customItemContent, menuOpen ? classes.customItemContentActive : null]} onClick={onToggleMenu}>

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
                        {console.log("MENUUU", menu)}
                        <Box className={classes.customItemMenuContent}>
                            {menu.map(item => {
                                return (
                                    <Box onClick={(e) => onClickMenuItem(e, item)} value={item.name || item} onKeyDown={onTabPress} className={classes.customItemContent}>
                                        {/* <Box onClick={(e) => onClick(e, item.name)} value="BB"> */}
                                        <Typography>{item.displayName || item}</Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </ClickAwayListener>
            </Card>
        </Box >
    )
}

export default CustomItem;