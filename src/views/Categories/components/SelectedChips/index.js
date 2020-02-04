import React, { useState, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Typography,
    Container,
    Chip,
    Box
} from '@material-ui/core';

import useStyle from './styles';

const SelectedChips = function ({ data }) {
    const classes = useStyle();
    const [selected, setSelected] = useState({});

    const onUnselect = function (unselect) {
        // onChangeValue
    }

    useEffect(() => {
        if (selected === undefined) return;
        const exclude = ['year', 'mileage', 'seats'];

        let obj = {};
        for (let key of Object.keys(data)) {
            console.log("LK", key)
            if (!exclude.includes(key)) {
                console.log(selected, "@#@#@@@#@")
                obj[key] = data[key];
            }
        }
        console.log("PP", data)
        setSelected(obj)
    }, [data])

    const onDelesect = function () {
        alert("IN DEV: Deselect")
        // onChangeValue(e, value, name)
    }

    return (
        <>
            {
                selected && Object.entries(selected).map(([key, value]) => {
                    return (
                        value !== "" && value.length !== 0 ?
                            <Box className={classes.chip}>
                                <Box className={classes.chipInner}>
                                    <Typography>{key, value}</Typography>
                                    <Box onClick={onDelesect} className={classes.chipIcon} >
                                        <FontAwesomeIcon icon="times" />
                                    </Box>
                                </Box>
                            </Box>
                            : ""
                    )
                })
            }
        </>
    )
}


export default SelectedChips;