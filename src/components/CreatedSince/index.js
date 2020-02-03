import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Typography,
    Box,
    Button,
    Grid,
} from '@material-ui/core';

// import useStyles from './styles';

const CreatedSince = function ({ createdAt }) {

    let time = '';

    let getTodayDate = new Date().getTime();
    let getCreatedDate = new Date(createdAt).getTime();

    let secondsPassed = Math.round((getTodayDate - getCreatedDate) / 1000);

    const minutePassed = Math.round(secondsPassed / 60)
    const hourPassed = Math.round(secondsPassed / 3600)
    const dayPassed = Math.round(secondsPassed / 86400)
    const monthPassed = Math.round(secondsPassed / 2592000)
    const yearPassed = Math.round(secondsPassed / (2592000 * 12))

    // If its 3dayPasseds old, make it on fire!
    const hour = 60,
        day = (secondsPassed / 3600) < 24

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
        <Box style={{ color: dayPassed < 3 ? 'red' : 'black' }}>
            {dayPassed < 3 ? <FontAwesomeIcon icon="fire" /> : <FontAwesomeIcon icon="clock" />} {time}
        </Box>
    )
}

export default CreatedSince;