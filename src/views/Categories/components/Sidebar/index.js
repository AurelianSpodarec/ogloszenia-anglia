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

import { placeholderCarFilter } from './menu';
import { CustomItem, CustomSlider } from './sub-components';

const Sidebar = function () {
    const classes = useStyles();

    const [make, setMake] = useState();

    // Set make here. Access the make models and display it in CustomItem
    // Custom Item add a handle for just arrays without key:value, just make it value 


    console.log(placeholderCarFilter["make"][0].models)
    return (
        <sidebar className={classes.sidebar} >
            <Card className={classes.sidebarInner}>
                {/* TODO: Refactor JSON so I can loop this with map */}
                <CustomItem
                    name="Posted by"
                    value="postedBy"
                />
                <Divider />
                <CustomItem
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
                    name="Year"
                    value="year"
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
                />
                <Box className={classes.item}>
                    <Button fullWidth variant="contained" color="secondary">Save filters</Button>
                </Box>
            </Card>
        </sidebar >
    )
}

export default Sidebar;