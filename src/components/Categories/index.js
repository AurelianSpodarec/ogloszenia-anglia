import React, { useState, useEffect } from 'react';

import CategoryItem from './sub-components/CategoryItem/'
import { Grid } from '@material-ui/core'

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
        "link": "motocykly-i-inne-pojazdy",
        "color": "default",
        "icon": "motorcycle"
    },
    {
        "name": "Sport, rozrywka, gry",
        "link": "sport-rozrywka-gry",
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
        "link": "inne",
        "color": "default",
        "icon": "cubes"
    },
    {
        "name": "Praca i Serwisy",
        "link": "praca-i-serwisy",
        "color": "default",
        "icon": "handshake",
    }
]

function Category() {

    const [activeCategory, setCategory] = useState(false)

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            {categories.map(category => (
                <CategoryItem
                    category={category}
                    activeCategory={activeCategory === category.link}
                    onSelectCategory={() => { setCategory(category.link) }}
                    key={category.link}
                />
            ))}

        </Grid>
    )
}

export default Category;