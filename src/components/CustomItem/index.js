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


const CustomItem = ({ label, search, data, icon, value, multiSelect, onClick, disabled, menuPosition }) => {
    const classes = useStyles();

    const [menu, setMenu] = useState(data || []);

    let [searchQuery, setSearchQuery] = useState();

    const [selected, setSelected] = useState();
    const [multiSelected, setMultiSelected] = useState([])

    const [menuOpen, setMenuOpen] = useState(false);

    const anchorRef = useRef(null);


    let customMenuPosition;
    switch (menuPosition) {
        case 'bottom':
            customMenuPosition = 'customItemMenuBottom'
            break;
        case 'right':
            customMenuPosition = 'customItemMenuRight'
            break;
        default:
            customMenuPosition = 'customItemMenuBottom'
    }


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
            labelValue = shortenWord(multiSelected.map(item => item.displayName).join(", "), 20);
        }

    } else {

        if (selected === undefined) {
            labelValue = "All"
        } else {
            labelValue = selected.displayName;
        }

    }


    const onClickMenuItem = (e, value) => {
        onClick(e, value.slug)

        if (multiSelect) {
            const isSelected = multiSelected.find(item => item.slug === value.slug)
            if (isSelected) {
                setMultiSelected(multiSelected.filter(item => item.slug !== value.slug))
            } else {
                setMultiSelected(multiSelected => [...multiSelected, value])
            }

        } else {
            setMenuOpen(false)
            setSelected(value)
        }

    }

    return (

        <Box className={classes.customItem}>


            <Box ref={anchorRef} className={[classes.customItemContent, menuOpen ? classes.customItemContentActive : null].join(" ")} onClick={onToggleMenu}>

                <Typography className={[classes.itemTitle, disabled ? classes.itemTitleDisabled : null].join(" ")}>{label}</Typography>
                <Box className={classes.itemMoreInfo}>
                    {disabled ? null :
                        <Typography className={classes.itemLabelValue}>{labelValue}</Typography>
                    }
                    <FontAwesomeIcon icon="angle-right" />


                </Box>

            </Box>
            <Card anchorel={anchorRef.current} className={[classes.customItemMenu, classes[customMenuPosition]].join(" ")} style={{ display: menuOpen ? 'block' : 'none' }}>
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
                        <Box className={classes.customItemMenuContent}>
                            {menu.map(item => {
                                return (
                                    <Box key={item.slug} onClick={(e) => onClickMenuItem(e, item)} onKeyDown={onTabPress} className={classes.customItemContent}>
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