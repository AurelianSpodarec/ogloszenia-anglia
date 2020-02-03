import React, { useState, useContext } from 'react';
import {
    Card,
    Button,
    Divider,
    Box,
} from '@material-ui/core';

import { INITIAL_CAR_STATE } from '@utils/data/menu';
import { CarListContext } from '@context/CarsListContext';
import { CustomItem, CustomSlider } from '@components';

import useStyles from './styles';

const CarSidebar = function () {
    const classes = useStyles();
    const useCarContext = useContext(CarListContext);

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
                    valueMatchLabel="Any year"
                    min={INITIAL_CAR_STATE.year[0]}
                    max={INITIAL_CAR_STATE.year[1]}
                    name="year"
                    value={useCarContext.car.year}
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