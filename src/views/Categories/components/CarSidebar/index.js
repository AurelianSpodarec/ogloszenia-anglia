import React, { useState } from 'react';
import {
    Card,
    Button,
    Divider,
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { CustomItem, CustomSlider } from '../../../../components';

import { INITIAL_STATE } from './menu';

const CarSidebar = function () {
    const classes = useStyles();

    const [models, setModels] = useState([])



    const [postedBy, setPostedBy] = useState();
    const [carMake, setCarMake] = useState();
    const [model, setModel] = useState();

    const [bodyStyle, setBodyStyle] = useState([]);
    const [transmission, setTransmission] = useState([]);


    const [year, setYear] = useState([INITIAL_STATE.year[0], INITIAL_STATE.year[1]]);
    const [mileage, setMileage] = useState([INITIAL_STATE.mileage[0], INITIAL_STATE.mileage[1]]);
    const [seats, setSeats] = useState([INITIAL_STATE.seats[0], INITIAL_STATE.seats[1]]);


    function submit() {
        // TODO: Take the values and form it into a URL to query the database
    }


    // const handleChange = e => {
    //     const { name, value } = e.target
    //     console.log(name, value)
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }


    // const [state, setState] = useState({
    //     make: 'all',
    //     model: 'all',
    //     postedBy: 'all',
    //     year: [1960, 2020],
    //     mileage: [0, 300000],
    //     seats: [1, 9]
    // });

    //TODO: Refactor this into something that is like above maybe
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
    }

    const onSelectModel = function (event, newValue) {
        setModel(newValue)
    }

    const onSelectBodyStyle = (event, newValue) => {
        const isSelected = bodyStyle.find(item => item === newValue);

        if (isSelected) {
            setBodyStyle(bodyStyle.filter(item => item !== newValue))
        } else {
            setBodyStyle([...bodyStyle, newValue])
        }
    }

    const onSelectTransmission = (event, newValue) => {
        const isSelected = transmission.find(item => item === newValue);

        if (isSelected) {
            setTransmission(transmission.filter(item => item !== newValue))
        } else {
            setTransmission([...transmission, newValue])
        }
    }

    const findModel = function (carBrand) {
        if (!carBrand) return;
        // if (!carMake) { return };
        const selectedCarModel = INITIAL_STATE.make.find(item => item.name === carBrand.name).models
        return selectedCarModel;
    }

    // const onChangeSlide = function () {

    // }

    // const onChangeItem = function () {

    // }

    return (

        <Box className={classes.sidebar} >

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
                    search
                    data={models}
                    onClick={onSelectModel}
                    disabled={!carMake}
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
        </Box>
    )
}

export default CarSidebar;