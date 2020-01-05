import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import {
    Box, FormControl, TextField, InputLabel,
    DialogContent,
    DialogActions,
    OutlinedInput, InputAdornment
} from '@material-ui/core/'

import useStyles from './styles'
import { CustomItem } from '../../components';
import { INITIAL_CAR_STATE } from './../../utils/data/menu'




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

const CustomTextArea = function () {
    const [char, setChar] = useState(0);
    const [text, setText] = useState();

    const classes = useStyles();

    const onChange = function (e, value) {
        const textareaLength = e.target.value.length;
        // TODO: FInish this
        if (textareaLength >= 1500) {
            console.log("Limit!")
        }

        setChar(textareaLength)
    }

    return (
        <Box className={classes.customTextArea}>
            <FormControl fullWidth className={classes.margin} >
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows="4"

                    value={text}
                    onChange={(e) => onChange(e)}
                />
            </FormControl>
            <Box className={classes.customTextAreaLimit}>{char} / 1500</Box>
        </Box>
    )
}


const AddListing = function ({ onClose, selectedValue, open }) {
    const classes = useStyles();
    const [category, setCategory] = useState();
    // const [open, setOpen] = useState();
    // const { onClose, selectedValue, open } = props;

    console.log(selectedValue, 'mkmkmkmkmkmkmkmkmk')

    // const handleClose = () => {
    //     // onSetClose(selectedValue);
    //     setOpen(falsselectedValuee)
    // };

    // const handleMenu = event => {
    //     set(event.currentTarget);
    // };

    return (
        <Dialog maxWidth="sm" fullWidth={true} onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle fontWeight="fontWeightBold" className={classes.dialogTitle} id="simple-dialog-title">Add new listing</DialogTitle>

            <DialogContent dividers='paper'>



                <Dropzone />

                <ListingChooseCar />

                {/* <ListingCarDetails /> */}



                <FormControl fullWidth className={classes.listingForm} >
                    {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
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
                    <CustomTextArea className={classes.listingForm} />
                </Box>

            </DialogContent>

            <DialogActions className={classes.dialogActions}>
                <Button className={classes.dialogActionsButton} variant="contained" color="secondary" fullWidth>List it!</Button>
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