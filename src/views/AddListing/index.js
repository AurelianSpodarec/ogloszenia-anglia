import React, { useState, useEffect } from 'react';

import {
    Container,
    Grid,
    Typography,
    TextField,
    Box,
    FormControl,
    InputLabel,
    Button,
    OutlinedInput,
    InputAdornment
} from '@material-ui/core';

import useStyles from './styles'


const AddListingCar = function () {
    return (
        <Box>

            <Typography>Car model</Typography>
            Year
            Make
            Model
            Trim

            <Typography>Car details</Typography>
            Body Style
            TRansmision
            Fuel
            Drivetrain
            Seats

            Mileage
        </Box>
    )
}

const Location = function () {
    return (
        // Current location - access geo data or if location is in profile
        // Zipcode/Select location
        <Box></Box>
        // 
    )
}

const ChooseCategory = function () {
    return (
        <Box>
            <Box>Cars</Box>
            <Box>Housing</Box>
            <Box>Jobs</Box>
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
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows="4"
                    variant="outlined"
                    value={text}
                    onChange={(e) => onChange(e)}
                />
            </FormControl>
            <Box className={classes.customTextAreaLimit}>{char} / 1500</Box>
        </Box>
    )
}


const AddListing = function (props) {
    const classes = useStyles();
    const [category, setCategory] = useState();

    return (
        <Container maxWidth="md">

            <Box>
                <Typography variant="h3">Add new listing</Typography>
            </Box>

            <Box>
                <Box>

                </Box>
            </Box>

            <Box>
                <Typography>Photos</Typography>

                <Typography>Choose a category</Typography>

                <Box className={classes.dropzone}>
                    <Box className={classes.dropzoneText}>
                        <Typography>Drop & Drop files here</Typography>
                        <Typography>or</Typography>
                        <Button>Browse Files</Button>
                    </Box>
                </Box>

                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <Box>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <TextField
                            required
                            id="outlined-required"
                            label="Title"
                            variant="outlined"
                        />
                    </FormControl>
                    <CustomTextArea />
                </Box>

                <Button variant="contained" color="primary" fullWidth>List it!</Button>


            </Box>
        </Container>
    )
}

export default AddListing;