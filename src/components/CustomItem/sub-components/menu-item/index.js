import React from 'react';

import {
    Typography,
    Box,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './styles';


const MenuItem = ({ menu, multiSelected, name, onClickMenuItem, value, onTabPress }) => {
    const classes = useStyles();
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

export default MenuItem;