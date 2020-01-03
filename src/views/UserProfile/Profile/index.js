import React from 'react';

import {
    Container,
    Grid,
    Typography,
    CardMedia,
    Box,
    Avatar
} from '@material-ui/core';

import useStyles from './styles'
import { useAuthData } from '../../../context/AuthContext';


const Profile = function (props) {
    const classes = useStyles();
    const auth = useAuthData();
    return (
        <Box>
            <CardMedia className={classes.banner} image="https://images.unsplash.com/photo-1568283096533-078a24930eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                <Typography>Listings</Typography>
                <Typography>Sold</Typography>
                <Typography>Ratings</Typography>
                <Typography>Followers</Typography>
                <Typography>Following</Typography>
            </CardMedia>
            <Container maxWidth="md">



                {/* </CardMedia> */}
                <Grid container>
                    <Grid item md="3" className={classes.profileSidebar}>
                        <Avatar className={classes.userInfoAvatar} alt={auth.user.firstName + auth.user.lastName}
                            src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/p960x960/11080291_10203728876572192_3782466732363772984_o.jpg?_nc_cat=108&_nc_ohc=ET3DslV_LR8AQlBIecnnU-MjALac5jGlxeqs-Jg1-jWpqk-4g7y2ovMWg&_nc_ht=scontent-lht6-1.xx&oh=d229dbd507595da4a547768270195b4d&oe=5E9DFDBD" />

                        <Box>

                            <Typography>{auth.user && auth.user.firstName} {auth.user && auth.user.lastName}</Typography>
                            <Typography>Joined: {auth.use && auth.user.createdAt}</Typography>
                        </Box>
                        <Box>
                            <Typography>Contact Details</Typography>
                            {auth.user && auth.user.mobile ?
                                <Typography>Tel: {auth.user && auth.user.mobile}</Typography>
                                : null}
                            {auth.user && auth.user.email ?
                                <Typography>Email: {auth.user && auth.user.email}</Typography>
                                : null}
                        </Box>
                    </Grid>


                    <Grid item md="9" className={classes.profileContent}>

                        <Grid container>
                            <Grid md="3">
                                <Typography>Items for sale</Typography>
                                <Box>
                                    <Box>Post 1</Box>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Profile;