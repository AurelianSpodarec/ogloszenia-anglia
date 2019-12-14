import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import AuthDialog from '../AuthDialog';
import useStyles from './styles'


const Header = function () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>
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
                                <Button onClick={handleClickOpen} variant="contained" color="secondary"><FontAwesomeIcon icon={"plus"} />Dodaj Ogloszenie</Button>
                                <br />
                                <Button onClick={handleClickOpen} color="inherit">Zalogoj</Button>
                                <Button onClick={handleClickOpen} color="inherit">Stworz Konto</Button>
                            </div>
                            {/* START -- isLogged --*/}

                            {/* END -- isLogged --*/}


                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
            <AuthDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}

export default Header;