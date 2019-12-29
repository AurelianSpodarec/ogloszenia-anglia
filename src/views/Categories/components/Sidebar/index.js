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
import { CustomItem, CustomSlider } from '../../../../components';

// import { placeholderCarFilter } from './menu';
// import { CustomItem, CustomSlider } from './sub-components';

import { placeholderCarFilter } from './menu';


const INITIAL_STATE = {
    postedBy: [
        {
            name: "individual",
            displayName: 'Individual'
        },
        {
            name: "dealership",
            displayName: 'Dealership'
        }
    ],
    make: [
        {
            name: "bwm",
            displayName: "BWM",
            models: ['600', 'M2']
        },
        {
            name: "alabama",
            displayName: "Alabama",
            models: ['600', 'M2']
        },
        {
            name: "assertion",
            displayName: "Assertion",
            models: ['600', 'M2']
        },
        {
            name: "transformation",
            displayName: "Transformation",
            models: ['600', 'M2']
        },
        {
            name: "united kingdom",
            displayName: "United Kingdom",
            models: ['600', 'M2']
        },
        {
            name: "bulldog",
            displayName: "Bulldog",
            models: ['600', 'M2']
        },
        {
            name: "astron martin",
            displayName: "Astron Martin",
            models: ['B6 COver', 'Covert']
        }
    ],
    year: [1960, 2020],
    mileage: [0, 300000],
    bodyStyle: [
        {
            name: "sedan",
            displayName: "Sedan",
            icon: "default"
        },
        {
            name: "hybrid",
            displayName: "Hybrid",
            icon: "default"
        },
        {
            name: "convertible",
            displayName: "Convertible",
            icon: "default"
        },
        {
            name: "truck",
            displayName: "Truck",
            icon: "default"
        },
        {
            name: "coupe",
            displayName: "Coupe",
            icon: "default"
        },
        {
            name: "hatchback",
            displayName: "Hatchback",
            icon: "default"
        },
        {
            name: "minivan",
            displayName: "Minivan",
            icon: "default"
        },
        {
            name: "wagon",
            displayName: "Wagon",
            icon: "default"
        },
        {
            name: "suv",
            displayName: "SUV",
            icon: "default"
        },
        {
            name: "others",
            displayName: "Others",
            icon: "default"
        }

    ],
    transmission: [
        {
            name: "automatic",
            displayName: "Automatic",
            icon: "default"
        },
        {
            name: "manual",
            displayName: "Manual",
            icon: "default"
        }
    ],
    fuel: [
        {
            name: "disel",
            displayName: "Disel",
            icon: "default"
        },
        {
            name: "electric",
            displayName: "Electric",
            icon: "default"
        },
        {
            name: "flex",
            displayName: "Flex",
            icon: "default"
        },
        {
            name: "gas",
            displayName: "Gas",
            icon: "default"
        },
        {
            name: "hybrid",
            displayName: "Hybrid",
            icon: "default"
        },
        {
            name: "others",
            displayName: "Others",
            icon: "default"
        }
    ],
    driveTrain: [
        {
            name: "4wd",
            displayName: "4WD",
            icon: "default"
        },
        {
            name: "aws",
            displayName: "AWD",
            icon: "default"
        },
        {
            name: "fwd",
            displayName: "FWD",
            icon: "default"
        },
        {
            name: "rwd",
            displayName: "RWD",
            icon: "default"
        }
    ],
    seats: [1, 9],
}

const Sidebar = function () {
    const classes = useStyles();

    const [make, setMake] = useState();
    const [model, setModel] = useState();


    const [year, setYear] = useState([INITIAL_STATE.year[0], INITIAL_STATE.year[1]]);
    const [mileage, setMileage] = useState([INITIAL_STATE.mileage[0], INITIAL_STATE.mileage[1]]);
    const [seats, setSeats] = useState([INITIAL_STATE.seats[0], INITIAL_STATE.seats[1]]);

    // const [state, setState] = useState({
    //     year: [1960, 2020],
    //     mileage: [0, 300000],
    //     seats: [1, 9]
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     console.log(name, value)
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }
    // console.log(state, state.year)


    const onYearChange = function (event, newValues) {
        setYear(newValues)
    }

    const onMileageChange = function (event, newValues) {
        setMileage(newValues)
    }

    const onSeatsChange = function (event, newValues) {
        setSeats(newValues)
    }

    // const onChangeSlide = function () {

    // }

    // const onChangeItem = function () {

    // }

    // Use ref?
    // const customMenu = function (props) {
    //     <div>
    //         <Typography>{props.name}</Typography>
    //         {icon ? <span>{props.icon}</span> : null}
    //     </div>
    // }
    // Menu data 
    console.log("AAAAAAAAAAAAA", INITIAL_STATE.make)
    return (
        <sidebar className={classes.sidebar} >
            <Card className={classes.sidebarInner}>

                {/* TODO: Refactor JSON so I can loop this with map */}
                <CustomItem
                    label="Make"
                    search


                    data={INITIAL_STATE.make}
                    // multiSelect// If true let the user select many options, if not, only one option avaiable
                    disabled // Enable if CUstomItem 1 has been selected
                />
                {/* This has icons */}
                <CustomItem
                    label="Body Style"
                    multiSelect
                    data={INITIAL_STATE.bodyStyle}
                />

                {/* {/* //<Divider /> */}

                {/* <CustomItem
                    name="Make"
                    value="make"
                    search
                    menuData={}
                    menu={customMenu}
                /> */}
                {/* <CustomItem
                    name="Model" 
                    value={make.model} //Model based on the selected make
                    value={make[bwm].models}
                    value={placeholderCarFilter["make"][0].models}
                />  */}
                <CustomSlider
                    // slideBeforeLabel
                    leftBeforeSlideMaxLabel={"Before"}
                    label="Year"
                    valueMatchLabel="Any year" // If values match display 'Any year', instead of 1960-2020
                    min={INITIAL_STATE.year[0]}
                    max={INITIAL_STATE.year[1]}
                    name="year"
                    value={year}
                    // onChange={handleChange}
                    onChange={onYearChange}
                />
                <Divider />
                <CustomSlider
                    label="Mileage"
                    labelRight={"+ mi"}
                    min={INITIAL_STATE.mileage[0]}
                    max={INITIAL_STATE.mileage[1]}
                    name="mileage"
                    value={mileage}
                    // onChange={handleChange}
                    onChange={onMileageChange}
                />
                <Divider />
                {/*
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
                    min={INITIAL_STATE.seats[0]}
                    max={INITIAL_STATE.seats[1]}
                    name="seats"
                    value={seats}
                    // onChange={handleChange}
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