import React, { useState, useContext } from 'react';
import {
    Card,
    Button,
    Divider,
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { CustomItem, CustomSlider } from '../../../../../components';

import { INITIAL_CAR_STATE } from '../../../../../utils/data/menu';
import { CarListContext } from '../../../../../context/CarsListContext';


const CarSidebar = function () {
    const classes = useStyles();
    const useCarContext = useContext(CarListContext);


    // const handleChange = e => {
    //     const { name, value } = e.target
    //     console.log(name, value)
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }



    // const onSelectMake = function (event, newValue) {
    //     setMake(newValue)
    //     setModels(findModel(newValue))
    // }

    // const onSlide = (event, newValue) => {
    //     const type = event.target.value;
    //     const isSelected.type.find(item => item === newValue);

    //     if(isSelected) {

    //     }
    // }

    // const onSelectBodyStyle = (event, newValue) => {
    //     const isSelected = bodyStyle.find(item => item === newValue);

    //     if (isSelected) {
    //         setBodyStyle(bodyStyle.filter(item => item !== newValue))
    //     } else {
    //         setBodyStyle([...bodyStyle, newValue])
    //     }
    // }

    // const onSelectTransmission = (event, newValue) => {
    //     const isSelected = transmission.find(item => item === newValue);

    //     if (isSelected) {
    //         setTransmission(transmission.filter(item => item !== newValue))
    //     } else {
    //         setTransmission([...transmission, newValue])
    //     }
    // }

    // const findModel = function (carBrand) {
    //     if (!carBrand) return;
    //     // if (!Make) { return };
    //     const selectedCarModel = INITIAL_CAR_STATE.make.find(item => item.name === carBrand.name).models
    //     return selectedCarModel;
    // }


    return (

        <Box className={classes.sidebar} >

            <Card className={classes.sidebarInner}>

                {/* <CustomItem
                    label="Posted by"
                    onClick={onPostedBy}
                    data={INITIAL_CAR_STATE.postedBy}
                />
                <Divider /> */}
                <CustomItem
                    label="Make"
                    search
                    onClick={useCarContext.onSelectMake}
                    data={INITIAL_CAR_STATE.make}
                />
                {/* <CustomItem
                    label="Model"
                    search
                    data={models}
                    onClick={useCarContext.onSelectModel}
                    disabled={!make}
                /> */}
                {/*<CustomSlider
                    // slideBeforeLabel
                    leftBeforeSlideMaxLabel={"Before"}
                    label="Year"
                    valueMatchLabel="Any year" // If values match display 'Any year', instead of 1960-2020
                    min={INITIAL_CAR_STATE.year[0]}
                    max={INITIAL_CAR_STATE.year[1]}
                    name="year"
                    value={year}
                    // onChange={handleChange}
                    onChange={onYearChange}
                />
                <Divider />
                <CustomSlider
                    label="Mileage"
                    labelRight={"+ mi"}
                    min={INITIAL_CAR_STATE.mileage[0]}
                    max={INITIAL_CAR_STATE.mileage[1]}
                    name="mileage"
                    value={mileage}
                    // onChange={handleChange}
                    onChange={onMileageChange}
                />
                <Divider /> */}
                {/* 
                <CustomItem
                    label="Body Style"
                    onClick={onSelectBodyStyle}
                    data={INITIAL_CAR_STATE.bodyStyle}
                    multiSelect
                />
                <CustomItem
                    label="Transmission"
                    onClick={onSelectTransmission}
                    data={INITIAL_CAR_STATE.transmission}
                    multiSelect
                />
                <CustomItem
                    label="Fuel"
                    data={INITIAL_CAR_STATE.fuel}
                    multiSelect
                />
                <CustomItem
                    label="Drivetrain"
                    data={INITIAL_CAR_STATE.driveTrain}
                    multiSelect
                />
                <Divider /> */}
                {/* <CustomSlider
                    label="Seats"
                    valueMatchLabel="Any"
                    labelRight="seats"
                    // labelLeft
                    // labelSlideLeft
                    // labelSlideRight
                    min={INITIAL_CAR_STATE.seats[0]}
                    max={INITIAL_CAR_STATE.seats[1]}
                    name="seats"
                    value={seats}
                    // onChange={handleChange}
                    onChange={onSeatsChange}
                /> */}
                <Box className={classes.item}>
                    <Button fullWidth variant="contained" color="secondary">Save filters</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default CarSidebar;