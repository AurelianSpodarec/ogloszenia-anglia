

import CarsView from '../../views/Categories/Cars';

import NotFound from '../../views/NotFound';
import HomesView from '../../views/Categories/Homes';
import DefaultView from '../../views/Categories/Default';
import CarView from '../../views/Categories/Cars/sub-components/CarView';



import useStyles from './styles'
import AddListing from '../../views/AddListing';
import Profile from '../../views/UserProfile/Profile';
import Settings from '../../views/UserProfile/Settings';

const categoriesRouter = {
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

export {
    categoriesRouter
}