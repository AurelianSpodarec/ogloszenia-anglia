import React, { useState, useEffect } from 'react';
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
            models: ['M2', 'popo', 'AA', 'TT5']
        },
        // {
        //     name: "alabama",
        //     displayName: "Alabama",
        //     models: ['sdsss', 'ewewew']
        // },
        {
            name: "assertion",
            displayName: "Assertion",
            models: ['njijnj600', 'okiokM2', 'ghjnk']
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

    const [carMake, setCarMake] = useState();
    const [model, setModel] = useState();
    const [models, setModels] = useState([])
    const [postedBy, setPostedBy] = useState();
    // const [models, setModels] = useState([]);
    const [bodyStyle, setBodyStyle] = useState([]);
    const [transmission, setTransmission] = useState([]);


    const [year, setYear] = useState([INITIAL_STATE.year[0], INITIAL_STATE.year[1]]);
    const [mileage, setMileage] = useState([INITIAL_STATE.mileage[0], INITIAL_STATE.mileage[1]]);
    const [seats, setSeats] = useState([INITIAL_STATE.seats[0], INITIAL_STATE.seats[1]]);

    // const [state, setState] = useState({
    //     year: [1960, 2020],
    //     mileage: [0, 300000],
    //     seats: [1, 9]
    // })

    // const findModel = function (brandName) {
    //     const make = INITIAL_STATE.make.map(item => item.name === brandName);
    //     const carModels = make.models
    //     // console.log(models)
    //     setModels(carModels)
    // }
    console.log(model, "Model")
    const findModel = function (carBrand) {
        if (!carBrand) return;
        // if (!carMake) { return };
        const selectedCarModel = INITIAL_STATE.make.find(item => item.name === carBrand.name).models
        return selectedCarModel;
    }
    // console.log()

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

    const onPostedBy = function (event, newValues) {
        setPostedBy(newValues)
    }

    const onSelectMake = function (event, newValue) {
        setCarMake(newValue)
        setModels(findModel(newValue))
        console.log(model, "KKKK") // Model is set
    }
    console.log(model, "LKLKL") // Model is set, but doesn't updae the component on the state change

    const onSelectModel = function (event, newValue) {
        console.log("FIREDDDD MODEL", newValue) // Not firing, 
        console.log(model, "OIOII   ")
        setModel(newValue)
    }

    const onSelectBodyStyle = (event, newValue) => {
        const isSelected = bodyStyle.find(item => item === newValue.name);

        if (isSelected === newValue.name) {
            setBodyStyle(bodyStyle.filter(item => item !== newValue.name))
        } else {
            setBodyStyle([...bodyStyle, newValue.name])
        }
    }

    const onSelectTransmission = (event, newValue) => {
        const isSelected = transmission.find(item => item === newValue.name);

        if (isSelected === newValue.name) {
            setTransmission(transmission.filter(item => item !== newValue.name))
        } else {
            setTransmission([...transmission, newValue.name])
        }
    }

    // const onChangeSlide = function () {

    // }

    // const onChangeItem = function () {

    // }
    return (
        <sidebar className={classes.sidebar} >

            <Card className={classes.sidebarInner}>

                <CustomItem
                    label="Posted by"
                    onClick={onPostedBy}
                    data={INITIAL_STATE.postedBy}
                />
                <Divider />
                <CustomItem
                    label="Make"
                    search
                    onClick={onSelectMake}
                    data={INITIAL_STATE.make}
                />
                <CustomItem
                    label="Model"
                    data={models}
                    onClick={onSelectModel}
                    disabled={carMake === undefined || null}
                />
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

                <CustomItem
                    label="Body Style"
                    onClick={onSelectBodyStyle}
                    data={INITIAL_STATE.bodyStyle}
                    multiSelect
                />
                <CustomItem
                    label="Transmission"
                    onClick={onSelectTransmission}
                    data={INITIAL_STATE.transmission}
                    multiSelect
                />
                <CustomItem
                    label="Fuel"
                    data={INITIAL_STATE.fuel}
                    multiSelect
                />
                <CustomItem
                    label="Drivetrain"
                    data={INITIAL_STATE.driveTrain}
                    multiSelect
                />
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