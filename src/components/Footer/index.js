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

const Footer = function () {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container maxWidth="md">


                <Grid container className={classes.footerTop}>
                    <Grid item xs={3}>
                        <Typography variant="h4">Buba</Typography>
                    </Grid>


                    <Box className={classes.socialIconWrap}>
                        <Box className={[classes.socialIcon, classes.socialIconFacebook].join(" ")}>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </Box>
                        <Box className={[classes.socialIcon, classes.socialIconGoogle].join(" ")}>
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </Box>
                        <Box className={[classes.socialIcon, classes.socialIconInstagarm].join(" ")}>
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </Box>
                    </Box>
                </Grid>


                <Grid container className={classes.footerBottom}>
                    <Typography>&copy; Buba {new Date().getFullYear()}. All rights reserved</Typography>

                    <Box className={classes.footerLinksWrap}>
                        <Typography className={classes.footerLinks}>Terms and condition</Typography>
                        <Typography className={classes.footerLinks}>Privacy Policy</Typography>
                        <Typography className={classes.footerLinks}>About Us</Typography>
                        <Typography className={classes.footerLinks}>Contact</Typography>
                        <Typography className={classes.footerLinks}>Categories</Typography>
                    </Box>

                </Grid>
            </Container>
        </div>

    )
}

export default Footer;