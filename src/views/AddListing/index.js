import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Dialog, Button, DialogTitle } from '@material-ui/core';

import {
    Box,
    FormControl,
    TextField,
    InputLabel,
    DialogContent,
    DialogActions,
    Input,
    InputAdornment
} from '@material-ui/core/'

import { INITIAL_CAR_STATE } from '@utils/data/menu';
import { createCar } from '@services/api/categories/car';
import { useForm } from '@hooks';
import { CustomItem, CustomTextarea } from '@components';

import useStyles from './styles'


const INITIAL_NEW_CAR_STATE = {
    "title": "",
    "description": "",
    "location": "",
    "price": "",
    "coverPicture": "",
    "media": [],
    "brand": "",
    "make": "",
    "model": "",
    "year": "",
    "milleage": "",
    "bodyStyle": "",
    "transmision": "",
    "fuel": "",
    "driveStrain": "",
    "seats": "",
}



const INITIAL_CUSTOM_DATA = {
    seats: [
        {
            slug: "1",
            displayName: '1'
        },
        {
            slug: "2",
            displayName: '2'
        },
        {
            slug: "3",
            displayName: '3'
        },
        {
            slug: "4",
            displayName: '4'
        },
        {
            slug: "5",
            displayName: '5'
        },
        {
            slug: "6",
            displayName: '6'
        },
        {
            slug: "7",
            displayName: '7'
        },
        {
            slug: "8",
            displayName: '8'
        },
        {
            slug: "9",
            displayName: '9'
        },

    ]

}

const AddListing = function ({ onClose, selectedValue, open }) {
    const [category, setCategory] = useState();
    const [newCar, setNewCar] = useState({});
    const [models, setModels] = useState([]);
    const classes = useStyles();

    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_NEW_CAR_STATE);

    const onSelected = (e, value, name) => {
        setNewCar({
            ...newCar,
            [name]: value
        });
    }

    useEffect(() => {
        const newModels = findModel(newCar.make)
        console.log(newModels, "LL")
        setModels(
            newModels
        )
    }, [newCar.make])

    console.log("ADD listing values", newCar)
    function submit() {
        console.log("submit")
        createCar({
            "title": values.title,
            "description": values.description,
            "location": values.location,
            "price": parseInt(values.price),
            "coverPicture": values.picture,
            "media": [],
            "brand": values.brand,
            "make": values.make,
            "model": values.model,
            "year": parseInt(values.year),
            "milleage": parseInt(values.milleage),
            "bodyStyle": values.bodyStyle,
            "transmision": values.transmision,
            "fuel": values.fuel,
            "driveStrain": values.driveStrain,
            "seats": parseInt(values.seats)
        })
    }

    const findModel = function (carBrand) {
        if (!newCar.make) return;
        const selectedCarModel = INITIAL_CAR_STATE.make.find(item => item.slug === carBrand).models
        return selectedCarModel;
    }

    return (
        <Dialog maxWidth="sm" fullWidth={true} onClose={onClose} aria-labelledby="simple-dialog-title" open={true}>
            <DialogTitle fontWeight="fontWeightBold" className={classes.dialogTitle} id="simple-dialog-title">Add new listing</DialogTitle>


            <DialogContent dividers='paper'>

                <CustomItem
                    name="postedBy"
                    label="Posted By"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={INITIAL_CAR_STATE.postedBy}
                    menuPosition="bottom"
                />
                <CustomItem
                    name="make"
                    label="Make"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    search
                    data={INITIAL_CAR_STATE.make}
                    menuPosition="bottom"
                />
                <CustomItem
                    name="model"
                    label="Model"
                    search
                    data={models || []}
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    disabled={!newCar.make}
                    menuPosition="bottom"
                />
                <CustomItem
                    name="fuel"
                    label="Fuel"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    search
                    data={INITIAL_CAR_STATE.fuel}
                    menuPosition="bottom"
                />

                {/* TODO: Need to create years array and re-factor this with a for loop from 1960 -2020*/}
                <CustomItem
                    name="year"
                    label="Year"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={[
                        {
                            slug: "2020",
                            displayName: '2020'
                        },
                        {
                            slug: "2019",
                            displayName: '2019'
                        },
                        {
                            slug: "2018",
                            displayName: '2018'
                        },
                        {
                            slug: "2017",
                            displayName: '2017'
                        },
                        {
                            slug: "2016",
                            displayName: '2016'
                        },
                        {
                            slug: "2015",
                            displayName: '2015'
                        },
                        {
                            slug: "2014",
                            displayName: '2014'
                        },
                        {
                            slug: "2013",
                            displayName: '2013'
                        },
                        {
                            slug: "2012",
                            displayName: '2012'
                        },

                    ]}
                    menuPosition="bottom"
                    multiSelect
                />
                {/* <Divider />
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

                <CustomItem
                    name="bodyStyle"
                    label="Body Style"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={INITIAL_CAR_STATE.bodyStyle}
                    menuPosition="bottom"
                    multiSelect
                />
                <CustomItem
                    name="transmission"
                    label="Transmission"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={INITIAL_CAR_STATE.transmission}
                    menuPosition="bottom"
                    multiSelect
                />
                <CustomItem
                    name="fuel"
                    label="Fuel"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={INITIAL_CAR_STATE.fuel}
                    menuPosition="bottom"
                    multiSelect
                />
                <CustomItem
                    name="drivetrain"
                    label="Drivetrain"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={INITIAL_CAR_STATE.driveTrain}
                    menuPosition="bottom"
                    multiSelect
                />
                <CustomItem
                    name="seats"
                    label="Seats"
                    onClick={(e, value, name) => onSelected(e, value, name)}
                    data={INITIAL_CUSTOM_DATA.seats}
                    menuPosition="bottom"
                />


                <FormControl fullWidth >
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        name="price"
                        label="Price"
                        value={values.price}
                        onChange={handleChange}
                        required
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <FormControl fullWidth className={classes.listingForm} >
                    <TextField
                        name="title"
                        label="Title"
                        value={values.title}
                        onChange={handleChange}
                        required
                    />
                    <CustomTextarea
                        name="description"
                        label="Description"
                        value={values.description}
                        onChange={handleChange}
                    />
                </FormControl>
            </DialogContent>

            <DialogActions className={classes.dialogActions}>
                <Button onClick={submit} className={classes.dialogActionsButton} variant="contained" color="secondary" fullWidth>List it!</Button>
            </DialogActions>

        </Dialog>

    )
}

export default AddListing;

AddListing.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};