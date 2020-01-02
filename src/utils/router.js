
// // import CarsView from "../views/Categories/Cars";
// // import HomesView from "../views/Categories/Homes";
// // import NotFound from "../views/NotFound";
// // import DefaultView from "../views/Categories/Default";





// // Categories

// // Dashboard

// // Not Found

// // UserProfile
// import Profile from "../views/UserProfile/Profile"
// // Settings

const routes = [
    {
        path: "/cars",
        component: CarsView,
        // routes:  
    },
    {
        path: "/homes",
        component: HomesView
    },
    {
        path: "/free-stuff",
        component: DefaultView
    },
    {
        path: "/settings",
        component: SettingsView,
        routes: [
            {
                path: '/settings/profile',
            },
            {
                path: '/settings/password',
            },
            {
                path: '/settings/password',
            }
        ]
    },

    // If none match
    {
        path: '*',
        component: NotFound
    }
]









// // const router = [
// //     {
// //         path: "/dashboard",
// //         component: Dashboard
// //     }
// // ]

// // const router = [
// //     categories = [
// //         {
// //             path: '/car',
// //             component: Car
// //         }
// //     ],
// //     userMenu = [
// //         {
// //             path: '/dashboard',
// //             component: UserDashboard
// //         },
// //          {
// //             path: '/myprofile',
// //             component: Profile
// //         }
// //     ],
// //     settings = [
// //         {
// //             path: '/password',
// //             component: SettingsPassword
// //         }
// //     ]
// // ]

// // I meant like this, check if the path of the url matches here, if it doesn't display component not found

// // ```js

// // const router = [
// //     {
// //         path: "/dashboard",
// //         component: Dashboard
// //     }
// // ]
// // ```


// // const routes = [
// //     {
// //         categories: [
// //             {
// //                 label: "Cars",
// //                 icon: "fa car",
// //                 bgColor: "primary",
// //                 component: CarsView,
// //                 routes: [
// //                     {
// //                         path: "/cars",
// //                         exact: true,
// //                         component: CarsView,
// //                         routes: [
// //                             {
// //                                 path: "/cars/:carID",
// //                                 component: <DefaultView /> //car view
// //                             }
// //                         ]
// //                     }
// //                 ]

// //             },
// //             {
// //                 component: HomesView
// //             },
// //             {
// //                 component: NotFound
// //             }
// //         ]
// //     },

// // ]