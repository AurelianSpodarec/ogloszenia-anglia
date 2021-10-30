import React, { useState, useEffect } from 'react';

import {
    Box,
    FormControl,
    TextField
} from '@material-ui/core/'

import useStyles from './styles'

const CustomTextarea = function ({ name, label, value, onChange }) {
    const [charCount, setCharCount] = useState(0);
    const [text, setText] = useState("");

    const classes = useStyles();

    useEffect(() => {
        const description = value.length
        setCharCount(description)
    }, [value])

    return (
        <>
            <FormControl fullWidth>
                <TextField
                    name={name}
                    label={label}
                    value={value}
                    onChange={onChange}
                    multiline
                    rows="4"
                />
            </FormControl>
            <Box className={classes.customTextAreaLimit}>{charCount} / 1500</Box>
        </>
    )
}

export default CustomTextarea;