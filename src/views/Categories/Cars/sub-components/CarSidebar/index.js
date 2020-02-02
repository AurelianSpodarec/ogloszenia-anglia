import React, { useState, useContext } from 'react';
import {
    Card,
    Button,
    Divider,
    Box,
} from '@material-ui/core';
import useStyles from './styles';
import { CustomItem, CustomSlider } from '@components';

import { INITIAL_CAR_STATE } from '@utils/data/menu';
import { CarListContext } from '@context/CarsListContext';


const CarSidebar = function () {
    const classes = useStyles();
    const useCarContext = useContext(CarListContext);
    console.log(useCarContext.car.year, "he")



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

                <CustomItem
                    label="Posted by"
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
                    data={INITIAL_CAR_STATE.postedBy}
                />
                <Divider />
                <CustomItem
                    label="Make"
                    search
                    name="make"
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
                    data={INITIAL_CAR_STATE.make}
                />
                <CustomItem
                    label="Model"
                    search
                    data={useCarContext.modelsData}
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
                    disabled={!useCarContext.car.make}
                />
                <CustomSlider
                    // slideBeforeLabel
                    leftBeforeSlideMaxLabel={"Before"}
                    label="Year"
                    valueMatchLabel="Any year" // If values match display 'Any year', instead of 1960-2020
                    min={INITIAL_CAR_STATE.year[0]}
                    max={INITIAL_CAR_STATE.year[1]}
                    name="year"
                    value={useCarContext.car.year}
                    // onChange={handleChange}
                    onChange={useCarContext.onYearChange}
                />

                <Divider />
                <CustomSlider
                    label="Mileage"
                    labelRight={"+ mi"}
                    min={INITIAL_CAR_STATE.mileage[0]}
                    max={INITIAL_CAR_STATE.mileage[1]}
                    name="mileage"
                    value={useCarContext.car.mileage}
                    // onChange={handleChange}
                    onChange={useCarContext.onMileageChange}
                />
                <Divider />

                <CustomItem
                    label="Body Style"
                    data={INITIAL_CAR_STATE.bodyStyle}
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
                    multiSelect
                />
                <CustomItem
                    label="Transmission"
                    data={INITIAL_CAR_STATE.transmission}
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
                    multiSelect
                />
                <CustomItem
                    label="Fuel"
                    data={INITIAL_CAR_STATE.fuel}
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
                    multiSelect
                />
                <CustomItem
                    label="Drivetrain"
                    data={INITIAL_CAR_STATE.driveTrain}
                    onClick={(a, b, c) => useCarContext.onChangeValue(a, b, c)}
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
                    min={INITIAL_CAR_STATE.seats[0]}
                    max={INITIAL_CAR_STATE.seats[1]}
                    name="seats"
                    value={useCarContext.car.seats}
                    // onChange={handleChange}
                    onChange={useCarContext.onSeatsChange}
                />
                <Box className={classes.item}>
                    <Button onClick={useCarContext.onFilter} fullWidth variant="contained" color="secondary">Save filters</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default CarSidebar;