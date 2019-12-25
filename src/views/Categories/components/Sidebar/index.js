import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {
    Grid,
    Card,
    Typography,
    Container,
    Toolbar,
    Slider,
    Tooltip,
    Button,
    withStyles,
    Box
} from '@material-ui/core';
import useStyles from './styles';

// const drawerWidth = 240;


const Sidebar = function () {
    const classes = useStyles();

    // TODO: Refactor into one component the slides
    const [year, setValue] = React.useState([1900, 2020]);
    const [milleage, setMilleage] = React.useState([0, 300000]);
    const [seats, setSeats] = React.useState([1, 8]);

    const onChangeYear = (event, newValue) => {
        setValue(newValue);
    };

    const onChangeMilleage = (event, newValue) => {
        setMilleage(newValue)
    }

    const onChangeSeats = (event, newValue) => {
        setSeats(newValue)
    }

    return (
        <sidebar className={classes.sidebar} >
            <Box className={classes.item}>
                <Box className={classes.itemSliderInfo}>
                    <Typography className={classes.itemTitle}>Year</Typography>
                    <Typography>{year[0]}-{year[1]}</Typography>
                </Box>
                <Slider
                    min={1900}
                    max={2020}
                    value={year}
                    onChange={onChangeYear}
                    aria-labelledby="range-slider"
                />
            </Box>
            <Divider />
            <Box className={classes.item}>
                <Box className={classes.itemSliderInfo}>
                    <Typography className={classes.itemTitle}>Milleage</Typography>
                    <Typography>{milleage[0]}-{milleage[1]} mi</Typography>
                </Box>
                <Slider
                    min={0}
                    max={300000}
                    value={milleage}
                    // marks={marks}
                    onChange={onChangeMilleage}
                    aria-labelledby="range-slider"
                />
            </Box>
            <Box className={classes.item}>
                <Box className={classes.itemSliderInfo}>
                    <Typography className={classes.itemTitle}>Seats</Typography>
                    <Typography>{seats[0]}-{seats[1]} seats</Typography>
                </Box>
                <Slider
                    min={1}
                    max={8}
                    value={seats}
                    // marks={marks}
                    onChange={onChangeSeats}
                    aria-labelledby="range-slider"
                />
            </Box>
            <Box className={classes.sidebarItem}>

            </Box>
            <Button>Save filters</Button>
        </sidebar>
    )
}

export default Sidebar;

{/* 

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
                            <Slider
                                min={1900}
                                max={2020}
                                value={value}
                                // marks={marks}
                                onChange={onChangeYear}
                                // valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            // getAriaValueText={valuetext}
                            />
                        </Toolbar>

                    </Card> */}
