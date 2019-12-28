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


const INITIAL_STATE = {
    year: [1960, 2020],
    mileage: [0, 300000],
    seats: [1, 9]
}

const Sidebar = function () {
    const classes = useStyles();

    const [make, setMake] = useState();
    const [model, setModel] = useState();


    const [year, setYear] = useState([INITIAL_STATE.year[0], INITIAL_STATE.year[1]]);
    const [mileage, setMileage] = useState([INITIAL_STATE.mileage[0], INITIAL_STATE.mileage[1]]);
    const [seats, setSeats] = useState([INITIAL_STATE.seats[0], INITIAL_STATE.seats[1]]);

    const onValueChange = function (event, newValues) {
        setYear(newValues)
    }

    const onMileageChange = function (event, newValues) {
        setMileage(newValues)
    }

    const onSeatsChange = function (event, newValues) {
        setSeats(newValues)
    }



    return (
        <sidebar className={classes.sidebar} >
            <Card className={classes.sidebarInner}>

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
                {/* //<Divider />
                //
                //<CustomItem
                //     name="Make"
                //     value="make"
                //     search
                // />
                // <CustomItem
                //     name="Model" // 
                //     // value={make.model} // Model based on the selected make
                //     // value={make[bwm].models}
                //     value={placeholderCarFilter["make"][0].models}
                // /> */}
                <CustomSlider
                    // slideBeforeLabel
                    // slideAfterLabel
                    label="Year"
                    valueMatchLabel="Any year" // If values match display 'Any year', instead of 1960-2020
                    min={1960}
                    max={2020}
                    value={year}
                    onChange={onValueChange}
                />
                <Divider />
                <CustomSlider
                    label="Mileage"
                    labelRight={"+ mi"}
                    min={0}
                    max={300000}
                    value={mileage}
                    onChange={onMileageChange}
                />
                <Divider />
                {/* <CustomItem
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
                /> */}
                <Divider />
                <CustomSlider
                    label="Seats"
                    valueMatchLabel="Any"
                    labelRight="seats"
                    // labelLeft
                    // labelSlideLeft
                    // labelSlideRight
                    min={1}
                    max={9}
                    value={seats}
                    onChange={onSeatsChange}
                />
                <Box className={classes.item}>
                    <Button fullWidth variant="contained" color="secondary">Save filters</Button>
                </Box>
            </Card>
        </sidebar >
    )
}

export default Sidebar;