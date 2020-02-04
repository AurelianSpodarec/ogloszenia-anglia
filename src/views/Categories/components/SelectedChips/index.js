import React, { useState, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Typography,
    Container,
    Chip,
    Box
} from '@material-ui/core';


const SelectedChips = function ({ data }) {
    const [selected, setSelected] = useState({});

    const onUnselect = function (unselect) {

    }

    useEffect(() => {
        console.log("ASdas", data)
        const exclude = ['year', 'mileage', 'seats'];

        let obj = {};
        for (const key of Object.keys(selected)) {
            if (!exclude.includes(key)) {
                obj[key] = selected[key];
            }
        }

        console.log("JJJJJ", obj)
        setSelected(data)
    }, [data])

    return (
        <Grid>
            {console.log("POPOOKPDSJFS", selected)}
            {Object.values(selected).map((selectedItem) => {
                return (
                    <>
                        {selectedItem === "" || selectedItem.length === 0 ? "" :
                            <Chip
                                label={selectedItem}
                                key={selectedItem}
                                deleteIcon={<FontAwesomeIcon icon="heart" />}
                                icon={<FontAwesomeIcon icon="times" />}
                                onDelete={onUnselect(selectedItem)}
                            // deleteIcon={<FontAwesomeIcon icon="times" />}
                            // deleteIcon={"X"}
                            />
                        }
                    </>
                )
            })}
        </Grid>
    )
}


export default SelectedChips;