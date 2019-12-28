import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    Typography,
    Container,
    Toolbar,
    Slider,
    Tooltip,
    Button,
    Divider,
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { placeholderCarFilter } from './menu';
import { CustomItem, CustomSlider } from './sub-components';

import { placeholderCarFilter } from './menu';

const Sidebar = function () {
    const classes = useStyles();

    const [make, setMake] = useState();
    const [model, setModel] = useState();
    // Dont change starting values
    const [values, setValues] = useState([1960, 2020]);

    const onValueChange = function (event, newValues) {
        setValues(newValues)
    }



    return (
        <sidebar className={classes.sidebar} >
            <Card className={classes.sidebarInner}>
                <CustomSlider
                    // slideBeforeLabel
                    // slideAfterLabel
                    label="Year"
                    valuesMatch="Any year" // If values match display 'Any year', instead of 1960-2020
                    min={1960}
                    max={2020}
                    value={values}
                    onChange={onValueChange}
                />
                {/* TODO: Refactor JSON so I can loop this with map */}
                {/* <CustomItem
                    label="Fuel"
                    menuData={placeholderCarFilter.fuel}
                />
                <CustomItem
                    label="Make"
                    menuData={placeholderCarFilter.make.models}
                    multiSelect// If true let the user select many options, if not, only one option avaiable
                    disabled // Enable if CUstomItem 1 has been selected
                /> */}
                <Divider />
                {/* <CustomItem
                    name="Make"
                    value="make"
                    search
                />
                <CustomItem
                    name="Model" // 
                    // value={make.model} // Model based on the selected make
                    // value={make[bwm].models}
                    value={placeholderCarFilter["make"][0].models}
                />
                <CustomSlider
                    // slideBeforeLabel
                    // slideAfterLabel
                    valuesMatch="Any year" // instead of 1960-2020
                    name="Year"
                    value="year"
                    data=""
                />
                <Divider />
                <CustomSlider
                    name="Mileage"
                    value="mileage"
                />
                <Divider />
                <CustomItem
                    name="Body Style"
                    value="bodyStyle"
                    multiSelect
                />
                <CustomItem
                    name="Transmission"
                    value="transmission"
                    multiSelect
                />
                <CustomItem
                    name="Fuel"
                    value="fuel"
                    multiSelect
                />
                <CustomItem
                    name="Drivetrain"
                    value="driveTrain"
                    multiSelect
                />
                <Divider />
                <CustomSlider
                    name="Seats"
                    value="seats"
                /> */}
                <Box className={classes.item}>
                    <Button fullWidth variant="contained" color="secondary">Save filters</Button>
                </Box>
            </Card>
        </sidebar >
    )
}

export default Sidebar;