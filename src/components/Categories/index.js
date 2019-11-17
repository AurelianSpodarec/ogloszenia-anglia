import { Component } from "react";

import { Icon, Container, Grid, Fab, Paper, withStyles } from "@material-ui/core";

import categoryItem from "./sub-components/categoryItem";

const categories = [
    {
        "text": "Cars",
        "link": "Cars",
        "color": "default",
        "icon": "fa fa-plus-circle"
    },
    {
        "text": "Houses",
        "link": "Cars",
        "color": "default",
        "icon": "fa fa-plus-circle"
    },
]


class Categories extends Component {

    render() {
        return (
            <nav>
                <ul>
                    {
                        categories.map(category => categoryItem(category))
                    }
                </ul>
            </nav>
        )
    }
}

export default Categories;


// const PostLink = props => (
//     <li>
//         <Link href="[car]" as={`${props.id}`}>
//             {/* <a><Fab color="secondary" aria-label="edit">
//                 <DriveEta />
//             </Fab></a> */}
//         </Link>
//         <Icon className="fa fa-plus-circle" color="disabled" fontSize="large" />

//     </li>
// )
// function FontAwesome() {
//     const classes = useStyles();

//     React.useEffect(() => {
//         loadCSS(
//             'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
//             document.querySelector('#font-awesome-css'),
//         );
//     }, []);

//     class Layout extends Component {

//         render() {

//             return (
//                 <div className="app">
//                     <Header />

//                     <nav>
//                         <Fab color="secondary" aria-label="edit">
//                             <DriveEta />
//                         </Fab>
//                         <Fab color="secondary" aria-label="edit">
//                             <House />
//                         </Fab>


//                         <PostLink id="cars" />
//                         <PostLink id="housing" />
//                         <PostLink id="services" />
//                         <PostLink id="work" />
//                         <PostLink id="free" />
//                         <PostLink id="sport" />
//                     </nav>

//                     <div>
//                         {this.props.children}
//                     </div>

//                     <Footer />
//                 </div>
//             );
//         }
//     }


//     export default withStyles(styles)(Layout);
