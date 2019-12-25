import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Card,
    Typography,
    Container,
    Toolbar,
    Slider,
    Tooltip,
    withStyles,
    Box
} from '@material-ui/core';
import PropTypes from 'prop-types';

import CarItem from './sub-components/CarItem/';
import { getCars, getCarById } from './../../../services/api/categories/car';
import useStyles from './styles'
import axios from 'axios';
// All Possibilities
// 
// Posted By: ["All", "Individual", "Dealership"]
// Body Style: ["All", "Sedan", "Hybrid", "Convertible", "Truck", "Coupe", "Hatchback", "Minivan", "Wagon", "SUV", "Others"]
// Transmision: ["All", "Automatic", "Manual"]
// Fuel: ["Disel", "Electric", "Flex", "Gas", "Hybrid"]
// Drivetrain: ["4WD", "AWD", "FWD", "RWD"]
// 
// Car Post

// DB

// Users
// Posts
// Categories: Cars, Homes, etc
// Single Product view: Full JSON
// Product Listing view: Some JSON
// Location? 
// Reviews
function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};
const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0px 2px 2px',
        '&:focus,&:hover,&$active': {
            boxShadow: '#ccc 0px 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </span>
    );
}
function valuetext(value) {
    return `${value}°C`;
}
const CarsView = function () {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [value, setValue] = React.useState([1900, 2020]);

    const onChangeValue = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCars();
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Typography>Uzywane auta w Leicester</Typography>
            {console.log(data)}
            <Grid container spacing={3}>

                <Grid item md={3}>
                    <Card>
                        <Toolbar>
                            <Typography>Posted by</Typography>
                            <FontAwesomeIcon icon="circle-right" />
                        </Toolbar>
                        <Toolbar>
                            <Box>
                                <Typography>Year</Typography>
                                <Typography>{value[0]}-{value[1]}</Typography>
                            </Box>
                            {/* <AirbnbSlider
                                ThumbComponent={AirbnbThumbComponent}
                                // marks={marks}
                                min={1900}
                                max={2020}
                                value={value}
                                onChange={onChangeValue}
                                getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                defaultValue={[1900, 2020]
                                }
                            /> */}
                            <Slider
                                min={1900}
                                max={2020}
                                value={value}
                                // marks={marks}
                                onChange={onChangeValue}
                                // valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        </Toolbar>
                    </Card>
                </Grid>

                <Grid item md={9}>
                    {data.map(car => {
                        return <CarItem key={car._id} car={car} />
                    })}
                    {/* <CarList data={data.hits} /> */}

                </Grid>

            </Grid>
        </Container>
    )
}

export default CarsView;
