import React from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box, AppBar, Toolbar, Button, InputBase } from '@material-ui/core';

import useStyles from './styles'

class Header extends React.Component {

    render() {
        return (

            <AppBar className="header">
                <Toolbar>

                    <Typography variant="h6" >
                        Ogloszenia Anglia
                    </Typography>

                    <div>
                        <div>
                        </div>
                        <InputBase
                            placeholder="Search…"

                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Button>Dodaj Ogloszenie</Button>

                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>

        )
    }
}

export default Header;