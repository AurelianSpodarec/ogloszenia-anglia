import React, { createContext, useContext, useEffect, useState } from 'react'

import { getCars } from '../services/api/categories/car';


const CarsList = createContext();

const CarListProvider = (props) => {
    const fetchCarList = async () => {

    }

    useEffect(() => {
        fetchCarList()
    })

    return (
        < CarListProvider.Provider value={} >
            {props.children}
        </CarListProvider.Provider >
    )

}


// Set CONTEXT with different components to filter CARS query
// Fetch CARS database with filter options and return them



