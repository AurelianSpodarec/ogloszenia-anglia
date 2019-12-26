import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {
    Grid,
    Card,
    Typography,
    Container,
    Toolbar,
    Slider,
    Tooltip,
    Button,
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shortenWord } from '../../../../utils/functions';

import { placeholderCarFilter } from './menu';
import { CustomItem } from './sub-components';

const Sidebar = function () {
    const classes = useStyles();
    // 

    // TODO: Refactor into one component the slides
    const [year, setValue] = React.useState([placeholderCarFilter.year[0], placeholderCarFilter.year[1]]);
    const [mileage, setMileage] = React.useState([placeholderCarFilter.mileage[0], placeholderCarFilter.mileage[1]]);
    const [seats, setSeats] = React.useState([placeholderCarFilter.seats[0], placeholderCarFilter.seats[1]]);

    const [make, setMake] = React.useState();

    // Set make here. Access the make models and display it in CustomItem
    // Custom Item add a handle for just arrays without key:value, just make it value 


    const onChangeYear = (event, newValue) => {
        setValue(newValue);
    };

    const onChangeMileage = (event, newValue) => {
        setMileage(newValue)
    }

    const onChangeSeats = (event, newValue) => {
        setSeats(newValue)
    }

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
                    selectLimit="1"
                    search
                />
                <CustomItem
                    name="Model" // 
                    // value={make.model} // Model based on the selected make
                    // value={make[bwm].models}
                    value={placeholderCarFilter["make"][0].models}
                />
                <Box className={classes.item}>
                    <Box className={classes.itemSliderInfo}>
                        <Typography className={classes.itemTitle}>Year</Typography>
                        <Typography>{year[0]}-{year[1]}</Typography>
                    </Box>
                    <Slider
                        min={placeholderCarFilter.year[0]}
                        max={placeholderCarFilter.year[1]}
                        value={year}
                        onChange={onChangeYear}
                        aria-labelledby="range-slider"
                    />
                </Box>
                <Divider />
                <Box className={classes.item}>
                    <Box className={classes.itemSliderInfo}>
                        <Typography className={classes.itemTitle}>Mileage</Typography>
                        <Typography>{mileage[0]}-{mileage[1]} mi</Typography>
                    </Box>
                    <Slider
                        min={placeholderCarFilter.mileage[0]}
                        max={placeholderCarFilter.mileage[1]}
                        value={mileage}
                        // marks={marks}
                        onChange={onChangeMileage}
                        aria-labelledby="range-slider"
                    />
                </Box>
                <Divider />

                <CustomItem
                    name="Body Style"
                    value="bodyStyle"
                />
                <CustomItem
                    name="Transmission"
                    value="transmission"
                />
                <CustomItem
                    name="Fuel"
                    value="fuel"
                />
                <CustomItem
                    name="Drivetrain"
                    value="drivetrain"
                />
                <Divider />
                <Box className={classes.item}>
                    <Box className={classes.itemSliderInfo}>
                        <Typography className={classes.itemTitle}>Seats</Typography>
                        <Typography>{seats[0]}-{seats[1]} seats</Typography>
                    </Box>
                    <Slider
                        min={placeholderCarFilter.seats[0]}
                        max={placeholderCarFilter.seats[1]}
                        value={seats}
                        // marks={marks}
                        onChange={onChangeSeats}
                        aria-labelledby="range-slider"
                    />
                </Box>
                <Box className={classes.item}>
                    <Button fullWidth variant="contained" color="secondary">Save filters</Button>
                </Box>
            </Card>
        </sidebar >
    )
}

export default Sidebar;

{/* 

<Card>
                        <Toolbar>
                            <Typography>Posted by</Typography>
                            <FontAwesomeIcon icon="circle-right" />
                        </Toolbar>

                        <Toolbar>
                            <Box>
                                <Typography>Year</Typography>
                                <Typography>{value[0]}-{value[1]}</Typography>
                            </Box>
                            <Slider
                                min={1900}
                                max={2020}
                                value={value}
                                // marks={marks}
                                onChange={onChangeYear}
                                // valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            // getAriaValueText={valuetext}
                            />
                        </Toolbar>

                    // </Card> */}

                    // {
                    //     bmw: {
                    //         {
                    //             "year": 2020,
                    //             "car": "ALPINA B6 Gran Coupe"
                    //         }
                    //         {
                    //             "year": 2019,
                    //             "car": "ALPINA B6 Gran Coupe"
                    //         }
                    //     }
                    //     bmw: {
                    //         {
                    //             "year": 2020,
                    //             "car": "ALPINA B6 Gran Coupe"
                    //         }
                    //     }

                    // }


                    // {[
                    //     _2020: [
                    //         bmw: [
                    //             {"car": "ALPINA B6 Gran Coupe"}
                    //         ]
                    //     ],
                    //     _2019: [
                    //         bwm: [
                    //             {"car": "ALPINA B6 Gran Coupe"}
                    //         ]
                    //     ]
                    // ]}

                    // //User Query: Year 2019, BWM, ALPINA B6 Gran Coupe
                    // {
                    //     "year": 2019, // User will search Year first
                    //     "make": "BWM", // Pick brand to see cars 
                    //     "model": "ALPINA B6 Gran Coupe", // Pick car model from the year
                    // }