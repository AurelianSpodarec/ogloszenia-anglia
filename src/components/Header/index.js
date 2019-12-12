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

// import useStyles from './styles'

// const Logo = function () {
//     const classes = useStyles();
//     return (
//         <Typography className={classes.logo} variant="h6" >
//             Ogloszenia Anglia
//         </Typography>
//     )
// }

// const SearchInput = function () {
//     const classes = useStyles();
//     return (
//         <div className={classes.searchIcon}>
//             <FontAwesomeIcon icon="search" />
//             <div>
//             </div>
//             <InputBase
//                 placeholder="Search…"

//                 inputProps={{ 'aria-label': 'search' }}
//             />
//         </div>
//     )
// }

// const HeaderButtons = function () {
//     const classes = useStyles();
//     return (
//         <>
//             <Button><FontAwesomeIcon icon={"plus"} />Dodaj Ogloszenie</Button>
//             <br/>
//             <Button color="inherit">Login</Button>
//             <Button color="inherit">Login</Button>
//         </>
//     )
// }
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        // backgroundColor: '#ffffff',
        borderBottom: '1px sold grey',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    logo: {
        color: "green"
    },
    search: {
        position: 'relative',
        flex: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchInput: {

    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: "flex",
    }
}));



const Header = function () {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar className={classes.header}>
                <Container>
                    <Toolbar>



                        <Typography>Ogloszenia Anglia</Typography>


                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <FontAwesomeIcon icon="search" />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                        <div className={classes.grow, classes.userSection}>
                            <Button><FontAwesomeIcon icon={"plus"} />Dodaj Ogloszenie</Button>
                            <br />
                            <Button color="inherit">Zalogoj</Button>
                            <Button color="inherit">Stworz Konto</Button>
                        </div>
                        {/* START -- isLogged --*/}

                        {/* END -- isLogged --*/}


                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header;