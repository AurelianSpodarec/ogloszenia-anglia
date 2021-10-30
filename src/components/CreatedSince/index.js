import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Typography,
    Box,
    Button,
    Grid,
    Chip
} from '@material-ui/core';

import useStyles from './styles';

// TODO: Take into account time zone, leap year, and other things. 
const CreatedSince = function ({ createdAt, newFor = 3, size }) {
    const classes = useStyles();

    let time = '';

    const hour = 60,
        day = 60 * 24,
        month = day * 30,
        year = month * 12;

    let getTodayDate = new Date().getTime(),
        getCreatedDate = new Date(createdAt).getTime();

    let secondsPassed = Math.round((getTodayDate - getCreatedDate) / 1000);

    const minutePassed = Math.round(secondsPassed / 60)
    const hourPassed = Math.round(secondsPassed / 3600)
    const dayPassed = Math.round(secondsPassed / 86400)
    const monthPassed = Math.round(secondsPassed / 2592000)
    const yearPassed = Math.round(secondsPassed / (2592000 * 12))

    const isNew = dayPassed < newFor;


    if ((secondsPassed / 60) < 60) {
        time = minutePassed + " minutes ago"
    } else if ((secondsPassed / 3600) < 24) {
        time = hourPassed + " hours ago"
    } else if ((secondsPassed / 86400) < 30) {
        time = dayPassed + " days ago"
    } else if ((secondsPassed / 2592000) < 12) {
        time = monthPassed + " month ago"
    } else {
        time = yearPassed + " year ago"
    }

    return (
        <Box style={{ color: isNew ? 'red' : 'black' }}>
            <Chip className={isNew ? classes.chipNew : ""}
                size={size}
                icon={<FontAwesomeIcon
                    style={{ color: isNew ? 'red' : 'black' }}
                    icon={isNew ? 'fire' : 'clock'}
                />}
                label={time}
            />
        </Box>
    )
}

export default CreatedSince;