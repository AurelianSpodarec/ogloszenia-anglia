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
    DialogActions,
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

const Pictures = function () {
    return (
        <Box>
            <Box>Main Pic</Box>
            <Box>
                <Box>Pic 1</Box>
                <Box> Pic2</Box>
                <Box> pic3</Box>
            </Box>
        </Box>
    )
}

const Common = function () {
    return (
        <Box>
            Title
            Description
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
    const classes = useStyles();
    const [category, setCategory] = useState();
    const { handleChange, handleSubmit, values } = useForm(submit, INITIAL_NEW_CAR_STATE);

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

    const onChange = (event) => {
        // setValues(...values, value)  
        console.log("On change", event.target.value)
        console.log(values)
        // setValues(title: event.target.value)
    }


    return (
        <Dialog maxWidth="sm" fullWidth={true} onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle fontWeight="fontWeightBold" className={classes.dialogTitle} id="simple-dialog-title">Add new listing</DialogTitle>

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


            {/* 
            <DialogContent dividers='paper'>
   
                <FormControl fullWidth className={classes.listingForm} >
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <TextField
                        label="Amount"
                        id="outlined-adornment-amount"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <Box>
                    <FormControl fullWidth className={classes.listingForm} >
                        <TextField
                            required
                            id="outlined-required"
                            label="Title"

                        />
                    </FormControl>
                    {/* <CustomTextArea 
                    onChange={}
                    description={values.description}
                     className={classes.listingForm} 
                     /> 
                </Box>

            </DialogContent>   */}

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