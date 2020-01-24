import React, { useState } from 'react';
import { useLocation, } from "react-router-dom";

import CategoryItem from './../CategoryItem/'
import { Grid } from '@material-ui/core'

import useStyles from './styles'


function CategoryList({ categories }) {
    const classes = useStyles()
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    let location = useLocation()

    const isMenuItem = function () {
        const matchUrlRoutes = categories.find(cat => cat.route.url === location.pathname)
        if (matchUrlRoutes != undefined && matchUrlRoutes.route.url === location.pathname
            || matchUrlRoutes == undefined && location.pathname == "/") {
            setIsMenuVisible(true)
        } else {
            setIsMenuVisible(false)
        }
    }

    React.useEffect(() => {
        isMenuItem()
    }, [location])

    return (
        <>
            {isMenuVisible ?
                <Grid className={classes.categoryWrap}>
                    {categories.map(category => {
                        return <CategoryItem
                            bgColor={category.bgColor}
                            key={category.route.url}
                            label={category.label}
                            icon={category.icon}
                            path={category.route.url}
                            component={category.component}
                        />
                    })}
                </Grid>
                : ""}
        </>
    )
}

export default CategoryList;