import React from 'react';

import { Box, Typography } from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    titleWrap: {
        padding: '24px 0 16px'
    },
    title: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    }


}));

const PageTitle = (props) => {
    const classes = useStyles();
    if (!props.title) return;
    return (
        <Box className={classes.titleWrap}>
            <Typography className={classes.title}>{props.title} in United Kingdom</Typography>
        </Box>
    )
}

export default PageTitle;