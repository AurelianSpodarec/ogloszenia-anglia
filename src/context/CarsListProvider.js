import React, { createContext, useContext, useEffect, useState } from 'react'

import { getCars } from '../services/api/categories/car';

import { INITIAL_CAR_STATE } from '../utils/data/menu'

const CarListContext = createContext();

function CarListProvider({ children }) {

    const [models, setModels] = useState([])

    const [postedBy, setPostedBy] = useState();
    const [make, setMake] = useState();
    const [model, setModel] = useState();

    const [bodyStyle, setBodyStyle] = useState([]);
    const [transmission, setTransmission] = useState([]);


    const [year, setYear] = useState([INITIAL_CAR_STATE.year[0], INITIAL_CAR_STATE.year[1]]);
    const [mileage, setMileage] = useState([INITIAL_CAR_STATE.mileage[0], INITIAL_CAR_STATE.mileage[1]]);
    const [seats, setSeats] = useState([INITIAL_CAR_STATE.seats[0], INITIAL_CAR_STATE.seats[1]]);


    const [carList, setCarList] = useState([])
    const [loading, setLoading] = useState(true)
    console.log("CAR PROVIDERRRRRRRRRRRRRRRRRRRRR")

    const fetchCarList = async () => {
        console.log("FETCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh")
        try {
            const cars = await getCars();
            setCarList(cars.data.cars)
            setLoading(false)
        } catch (e) {
            console.log("CarsListProvider: ", e)
        }
    }

    useEffect(() => {
        console.log("useEffect")
        fetchCarList()
    }, [])

    return (
        <CarListContext.Provider value={{
            carList,
            loading
        }} >
            {children}
        </CarListContext.Provider >
    )

}


export {
    CarListContext,
    CarListProvider
}

// Set CONTEXT with different components to filter CARS query
// Fetch CARS database with filter options and return them



