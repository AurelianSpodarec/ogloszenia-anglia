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


const SubMenuItem = ({ menu, multiSelected, name, onClickMenuItem, value, onTabPress }) => {
    const classes = useStyles();
    console.log("KKK", multiSelected)
    return (
        <Box className={classes.customItemMenuContent}>
            {menu.map(item => {
                return (
                    <Box key={item.slug} name={name} value={item.displayName} onClick={(e, b) => onClickMenuItem(e, item, name, value)} onKeyDown={onTabPress} className={classes.customItemContent}>


                        <Typography name={name} value={item.displayName}>
                            {
                                multiSelected.length !== 0 && multiSelected.find(selectedItem => selectedItem.slug === item.slug) ?
                                    <FontAwesomeIcon icon="check" />
                                    : ""
                            }
                            {item.displayName || item}
                        </Typography>
                    </Box>
                )
            })}
        </Box>
    )
}


const CustomItem = ({ name, label, search, data, icon, value, multiSelect, onClick, disabled, menuPosition }) => {
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
            customMenuPosition = 'customItemMenuRight'
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
    }, [data, searchQuery])

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


    const onClickMenuItem = (e, value, name) => {
        // const a = <div name="hello" target="tte"></div>;
        onClick(e, value.slug, name, value)
        // console.log("Custom item", name, value, e.target, value.slug)

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

    const MenuItems = function () {
        return (
            <Box className={classes.customItemMenuContent}>
                {menu.map(item => {
                    return (
                        <Box key={item.slug} name={name} value={item.displayName} onClick={(e, b) => onClickMenuItem(e, item, name, value)} onKeyDown={onTabPress} className={classes.customItemContent}>

                            {/* RE_RENDER */}
                            {!multiSelected.length === 0 && multiSelected.filter(selectedItem => selectedItem.slug === item.slug) ? 'ok ' : "false"}
                            <Typography name={name} value={item.displayName}>{item.displayName || item}</Typography>
                        </Box>
                    )
                })}
            </Box>
        )
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

                        <SubMenuItem menu={menu} multiSelected={multiSelected} value={value} onClickMenuItem={onClickMenuItem} name={name} onTabPres={onTabPress} />

                    </Box>
                </ClickAwayListener>
            </Card>
        </Box >
    )
}

export default CustomItem;