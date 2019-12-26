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



// const customSlider = function(min, max) {
//     const [value, setValue = React.useState([min, max])]


// }

const placeholderCarFilter = {
    postedBy: [
        { name: 'Individual' },
        { name: 'Dealership' }
    ],
    //TODO: In future... Do: cars -> make -> year. If they select 2019 and the model doesn't exist
    cars: [
        { bwm: ['600', 'M2'] },
        { astronMartin: ['B6 COver', 'Covert'] }
    ],
    year: [1960, 2020],
    mileage: [0, 300000],
    bodyStyle: [
        {
            name: "Sedan",
            icon: "default"
        },
        {
            name: "Hybrid",
            icon: "default"
        },
        {
            name: "Convertible",
            icon: "default"
        },
        {
            name: "Truck",
            icon: "default"
        },
        {
            name: "Coupe",
            icon: "default"
        },
        {
            name: "Hatchback",
            icon: "default"
        },
        {
            name: "Minivan",
            icon: "default"
        },
        {
            name: "Wagon",
            icon: "default"
        },
        {
            name: "SUV",
            icon: "default"
        },
        {
            name: "Others",
            icon: "default"
        }

    ],
    transmition: [
        {
            name: "Automatic",
            icon: "default"
        },
        {
            name: "Manual",
            icon: "default"
        }
    ],
    fuel: [
        {
            name: "Disel",
            icon: "default"
        },
        {
            name: "Electric",
            icon: "default"
        },
        {
            name: "Flex",
            icon: "default"
        },
        {
            name: "Gas",
            icon: "default"
        },
        {
            name: "Hybrid",
            icon: "default"
        },
        {
            name: "Others",
            icon: "default"
        }
    ],
    driveTrain: [
        {
            name: "4WD",
            icon: "default"
        },
        {
            name: "AWD",
            icon: "default"
        },
        {
            name: "FWD",
            icon: "default"
        },
        {
            name: "RWD",
            icon: "default"
        }
    ],
    seats: [1, 9],

    // Location['Leicester', 'Manchester'] - perhaps later use google maps for proximity and such
    // Price[min, max], 
    // Sort By['Relevance', 'Date (most recent)', 'Price: low to high', 'Price: high to low', 'CLosest first']
    // postedWithin: ['All Listings', 'The last 24 hours', 'The last 7 days', 'The last 30days']
}

const Sidebar = function () {
    const classes = useStyles();

    // TODO: Refactor into one component the slides
    const [year, setValue] = React.useState([placeholderCarFilter.year[0], placeholderCarFilter.year[1]]);
    const [mileage, setMileage] = React.useState([placeholderCarFilter.mileage[0], placeholderCarFilter.mileage[1]]);
    const [seats, setSeats] = React.useState([placeholderCarFilter.seats[0], placeholderCarFilter.seats[1]]);

    const onChangeYear = (event, newValue) => {
        setValue(newValue);
    };

    const onChangeMileage = (event, newValue) => {
        setMileage(newValue)
    }

    const onChangeSeats = (event, newValue) => {
        setSeats(newValue)
    }

    const openCarMenu = (value) => {

        let b = dropdownList(value)
        // console.log(b)
        return b;
    }

    const dropdownList = (category) => {
        const a = placeholderCarFilter[category]
        return (
            <Box>

                {
                    a.map(item => {
                        dropdownItem(item)
                    })
                }
            </Box>
        )
    }

    const dropdownItem = (item) => {
        let value;
        if (!item.name) {
            value = item;
        } else {
            value = item.name;
        }
        // console.log(value)
        return (
            <Typography onClick={() => console.log(value)}>{value}</Typography>
        )
    }

    const ItemA = (name, menu) => {
        // If nothing is selected, display: All
        // If one item is selected, display it
        // If more than three items are selected, display: Item1, Item2, ...

        // if (selected) {
        //     // Display Item Name
        // } else {
        //     return (<>All</>)
        // }

        return (
            <Box onClick={openCarMenu} value="postedBy" className={[classes.item, classes.itemMenu]}>
                <Typography className={classes.itemTitle}>{name}</Typography>

                <Box className={classes.itemMoreInfo}>
                    <Typography>All</Typography>
                    <FontAwesomeIcon icon="angle-right" />
                </Box>
                {/* Menu */}
                <Box>
                    {/* <Typography>{value}</Typography> */}
                    {dropdownItem(name)}
                </Box>
            </Box>
        )
    }


    const CustomItem = ({ name, value }) => {
        const [selected, setSelected] = React.useState([]);
        const result = placeholderCarFilter[value] || [];

        let label;
        if (selected.length === 0 || selected.length === result.length) {
            label = "All";
        } else {
            label = shortenWord(selected.join(", "), 20)
        }

        const onClickSelected = function (value) {
            const isSelected = selected.find(item => item === value);
            if (isSelected === value) {
                setSelected(selected.filter(item => item !== value))
            } else {
                setSelected(selected => [...selected, value])
            }
        }

        return (
            <Box onClick={() => openCarMenu(value)} className={[classes.item, classes.itemMenu]}>
                <Typography className={classes.itemTitle}>{name}</Typography>
                <Box className={classes.itemMoreInfo}>
                    <Typography>{label}</Typography>
                    <FontAwesomeIcon icon="angle-right" />
                </Box>

                <Box>
                    {
                        result.map(item => {
                            return (
                                <Box onClick={() => onClickSelected(item.name)} value={item.name}>
                                    <Typography>{item.name}</Typography>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Box>
        )
    }

    const CustomSlider = () => {
        return (
            <>

            </>
        )
    }

    return (
        <sidebar className={classes.sidebar} >
            <Card>
                <CustomItem
                    name="Posted by"
                    value="postedBy"
                />
                {/* <CustomItem
                    name="Fuel"
                    value="fuel"
                />
                <CustomItem
                    name="Make"
                    value=""
                /> */}
                {/* <ItemA name="postedBy">
                
                </ItemA>
                <Box onClick={() => openCarMenu('postedBy')} value="postedBy" className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Posted by</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>All</Typography>
                        <FontAwesomeIcon icon="angle-right" />
                    </Box>
                </Box>
                <Divider />
                <Box className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Make</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>Astron Martin</Typography>
                    </Box>
                </Box>
                <Box className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Model</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>Lagonda</Typography>
                    </Box>
                </Box>
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

                <Box className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Body Style</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>All</Typography>
                        <FontAwesomeIcon icon="angle-right" />
                    </Box>
                </Box>
                <Box className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Transmission</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>All</Typography>
                        <FontAwesomeIcon icon="angle-right" />
                    </Box>
                </Box>
                <Box className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Fuel</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>All</Typography>
                        <FontAwesomeIcon icon="angle-right" />
                    </Box>
                </Box>
                <Box onClick={() => openCarMenu('driveTrain')} className={[classes.item, classes.itemMenu]}>
                    <Typography className={classes.itemTitle}>Drivetrain</Typography>
                    <Box className={classes.itemMoreInfo}>
                        <Typography>All</Typography>
                        <FontAwesomeIcon icon="angle-right" />
                    </Box>
                </Box>

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
                </Box> */}
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