import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import {
    Box, FormControl, TextField, InputLabel,
    DialogContent,
    DialogActions, Input,
    OutlinedInput, InputAdornment
} from '@material-ui/core/'



import { INITIAL_CAR_STATE } from '@utils/data/menu';
import { createCar } from '@services/api/categories/car';
import { useForm } from '@hooks';

import { CustomItem, CustomTextarea } from '@components';
import useStyles from './styles'


const Location = function () {
    return (
        // Current location - access geo data or if location is in profile
        // Zipcode/Select location
        <Box></Box>
        // 
    )
}

const ListingChooseCar = function () {
    return (
        <Box>
            <Typography>Car model</Typography>

            <CustomItem
                label="Year"
                // onClick={onPostedBy}
                search
                data={INITIAL_CAR_STATE.year}
            />
            <CustomItem
                label="Make"
                // onClick={onPostedBy}
                search
                data={INITIAL_CAR_STATE.make}
            />
            {/* Get by id selected */}
            {/* <CustomItem
                label="Model"
                // onClick={onPostedBy}
                search
                data={INITIAL_CAR_STATE.model}
            /> */}

            <Typography>Car details</Typography>


            <CustomItem
                label="Body Style"
                // onClick={onSelectBodyStyle}
                data={INITIAL_CAR_STATE.bodyStyle}
                multiSelect
            />
            <CustomItem
                label="Transmission"
                // onClick={onSelectTransmission}
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
            {/* <Divider /> */}

            Seats
            Mileage
        </Box>
    )
}

const ChooseCategory = function () {
    const classes = useStyles();

    return (
        <Box>
            <Typography>Choose a category</Typography>
            <Box>Cars</Box>
            <Box>Housing</Box>
            <Box>Jobs</Box>
        </Box>
    )
}


// TODO: Make dropzone global
const Dropzone = function () {
    const classes = useStyles();

    return (
        <Box className={classes.dropzone}>
            <Box className={classes.dropzoneInner}>
                <Box className={classes.dropzoneText}>
                    <Typography>Drop & Drop or browser</Typography>
                    <Typography>Upload up to 10photos of what you're selling. Images must be in PNG or JPG format and under 5mb.</Typography>
                    {/* <Typography>or</Typography>
                            <Button>Browse Files</Button> */}
                </Box>
            </Box>

            {/* <Box>
                        Image
                    </Box>
                    <Box></Box> */}
        </Box>
    )
}

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