import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Container,
    Grid,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase
} from '@material-ui/core';

import useStyles from './styles'

const Logo = function () {
    const classes = useStyles();
    return (
        <Typography className={classes.logo} variant="h6" >
            Ogloszenia Anglia
        </Typography>
    )
}

const SearchInput = function () {
    const classes = useStyles();
    return (
        <div className={classes.searchIcon}>
            <FontAwesomeIcon icon="search" />
            <div>
            </div>
            <InputBase
                placeholder="Search…"

                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

const HeaderButtons = function () {
    const classes = useStyles();
    return (
        <>
            <Button><FontAwesomeIcon icon={['fas', 'plus']} />Dodaj Ogloszenie</Button>

            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
        </>
    )
}

const Header = function () {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Container>
                <Toolbar>

                    <Logo />

                    <SearchInput />

                    <HeaderButtons />

                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header;