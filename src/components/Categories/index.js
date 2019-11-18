import React from 'react';
import categoryItem from './sub-components/categoryItem';
import { Grid } from '@material-ui/core';

const categories = [
    {
        "name": "Motoryzacja",
        "link": "motoryzacja",
        "color": "default",
        "icon": "car"
    },
    {
        "name": "Nieruchomosc",
        "link": "nieruchomosc",
        "color": "default",
        "icon": "home"
    },
    {
        "name": "Oddam za darmo",
        "link": "oddam-sa-darmo",
        "color": "default",
        "icon": "gift"
    },
    {
        "name": "Electronika",
        "link": "elektronika",
        "color": "default",
        "icon": "mobile-alt"
    },
    {
        "name": "Dom i Ogród",
        "link": "dom-i-ogrod",
        "color": "default",
        "icon": "couch"
    },
    {
        "name": "Motocykly i inne pojazdy",
        "link": "motoryzacja",
        "color": "default",
        "icon": "motorcycle"
    },
    {
        "name": "Sport, rozrywka, gry",
        "link": "motoryzacja",
        "color": "default",
        "icon": "dumbbell"
    },
    {
        "name": "Eventy",
        "link": "eventy",
        "color": "default",
        "icon": "calendar-alt"
    },
    {
        "name": "Inne",
        "link": "motoryzacja",
        "color": "default",
        "icon": "cubes"
    },
    {
        "name": "Praca i Serwisy",
        "link": "motoryzacja",
        "color": "default",
        "icon": "handshake",
    }
]

class Category extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >    {categories.map(category => categoryItem(category))}

            </Grid>
        )
    }
}

export default Category;