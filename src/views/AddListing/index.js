import React, { useState } from 'react';

import {
    Container,
    Grid,
    Typography,
    Box,
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


const AddListing = function (props) {
    const classes = useStyles();
    const [category, setCategory] = useState();

    return (
        <Container>


            <Box>

            </Box>

            <Box>
                Pictures
                Price or Free

                Title

                Description
            </Box>




        </Container>
    )
}

export default AddListing;