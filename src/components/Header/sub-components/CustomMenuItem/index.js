
import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Avatar,
    Divider
} from '@material-ui/core';


import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';

import MenuItem from '@material-ui/core/MenuItem';
import { useAuthData } from '../../../../context/AuthContext';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CustomMenuItem = function (props) {
    return (
        <MenuItem href={props.href} onClick={props.onClick}>
            <ListItemIcon>
                <FontAwesomeIcon icon={props.icon} />
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </MenuItem>
    )
}

export default CustomMenuItem;