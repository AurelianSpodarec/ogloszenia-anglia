import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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