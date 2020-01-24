import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import CategoryItem from './sub-components/CategoryItem/'
import { Grid } from '@material-ui/core'



import CarsView from '../../views/Categories/Cars';

import NotFound from '../../views/NotFound';
import HomesView from '../../views/Categories/Homes';
import DefaultView from '../../views/Categories/Default';
import CarView from '../../views/Categories/Cars/sub-components/CarView';



import useStyles from './styles'
import AddListing from '../../views/AddListing';
import Profile from '../../views/UserProfile/Profile';
import Settings from '../../views/UserProfile/Settings';

const router = {
    menu: [
        {
            "label": "Dashboard",
            "route": {
                "url": "/dashboard"
            }
        }
    ],
    categories: [
        {
            "label": "cars",
            "icon": "car",
            "bgColor": "#327FB6",
            "component": CarsView,
            "exact": true,
            "route": {
                "url": "/cars",
            }
        },
        // {
        //     "component": CarView,
        //     "route": {
        //         "url": "/cars/:carID",
        //     }
        // },
        {
            "label": "homes",
            "icon": "home",
            "bgColor": "#A175D9",
            "component": DefaultView,
            "route": {
                "url": "/homes",
            }
        },
        {
            "label": "Free Stuff",
            "icon": "gift",
            "bgColor": "#FF3F55",
            "component": DefaultView,
            "route": {
                "url": "/free-stuff",
            }
        },
        {
            "label": "Electronics",
            "color": "default",
            "icon": "mobile-alt",
            "bgColor": "#6BCEBB",
            "component": DefaultView,
            "route": {
                "url": "/electronics",
            }
        },
        {
            "label": "Housing and Garden",
            "color": "default",
            "icon": "couch",
            "bgColor": "#FFD200",
            "component": DefaultView,
            "route": {
                "url": "/home-garden",
            }
        },
        {
            "label": "Motorcycles and Other Vehicles",
            "color": "default",
            "icon": "motorcycle",
            "bgColor": "#FB8636",
            "component": DefaultView,
            "route": {
                "url": "/cars-motors",
            }
        },
        {
            "label": "Sports, Leisue and Games",
            "color": "default",
            "icon": "dumbbell",
            "bgColor": "#A3CE71",
            "component": DefaultView,
            "route": {
                "url": "/sports-leasure-games"
            }
        },
        {
            "label": "Events",
            "color": "default",
            "icon": "calendar-alt",
            "bgColor": "#000",
            "component": DefaultView,
            "route": {
                "url": "/events",
            }
        },
        {
            "label": "Others",
            "color": "default",
            "icon": "cubes",
            "bgColor": "#000",
            "component": DefaultView,
            "route": {
                "url": "/others",
            }
        },
        {
            "label": "Jobs and Services",
            "color": "default",
            "icon": "handshake",
            "bgColor": "#E34A6B",
            "component": DefaultView,
            "route": {
                "url": "/services-jobs",
            }
        }
    ]

}

function MenuList({ categories }) {
    const classes = useStyles()

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    let location = useLocation()


    console.log('>>>', location)

    const isMenuItem = function () {
        const matchUrlRoutes = router.categories.find(cat => cat.route.url === location.pathname)
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

// function MenuList() {
//     let location = useLocation()
//     console.log(location)

//     // const isMatch = function () {

//     //     const a = router.categories.find(cat => cat.route.url === window.location.pathname)
//     //     // console.log("d", a != undefined && a.route.url === window.location.pathname
//     //     // || a != undefined && window.location.pathname == "/")
//     //     // if ((a && a.route.url === window.location.pathname) || window.location.pathname == "/") {
//     //     // console.log("sd", a != undefined && window.location.pathname = "/")
//     //     // console.log(a, window.location.pathname == "/")
//     //     if (a != undefined && a.route.url === window.location.pathname
//     //         || a != undefined && window.location.pathname == "/") {
//     //         setIsMenuVisible(true)
//     //     } else if (a === undefined) {
//     //         setIsMenuVisible(false)
//     //     } else {
//     //         setIsMenuVisible(true)
//     //     }

//     // }

//     // React.useEffect(() => {
//     //     isMatch()
//     // }, [])

//     const classes = useStyles()
//     return (
//         <>
//             {isMenuVisible ?
//                 <Grid className={classes.categoryWrap}>
//                     {router.categories.map(category => {
//                         return <CategoryItem
//                             bgColor={category.bgColor}
//                             key={category.route.url}
//                             label={category.label}
//                             icon={category.icon}
//                             path={category.route.url}
//                             component={category.component}
//                         />

//                     })}
//                 </Grid>
//                 : null}
//         </>
//     )

// }

function Category() {

    return (

        <Router>

            <MenuList categories={router.categories} />

            <Switch>
                {/* <Route exact path="/" component={AddListing} /> */}
                <Route exact path="/cars" component={CarsView} />
                <Route path={`/cars/:id`} component={CarView} />

                <Route path="/homes" component={HomesView} />
                <Route path="/free-stuff" component={DefaultView} />
                <Route path="/electronics" component={DefaultView} />
                <Route path="/home-garden" component={DefaultView} />
                <Route path="/cars-motors" component={DefaultView} />
                <Route path="/sports-leasure-games" component={DefaultView} />
                <Route path="/events" component={DefaultView} />
                <Route path="/others" component={DefaultView} />
                <Route path="/services-jobs" component={DefaultView} />

                <Route path="/addlisting" component={AddListing} />
                <Route path="/myprofile" component={Profile} />
                <Route path="/settings" component={Settings} />

                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Category;