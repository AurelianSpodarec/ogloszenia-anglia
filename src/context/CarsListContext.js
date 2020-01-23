import React, { createContext, useContext, useEffect, useState } from 'react'

import { getCars } from '../services/api/categories/car';

import { INITIAL_CAR_STATE } from '../utils/data/menu'

const CarListContext = createContext();

function CarListProvider({ children }) {

    const [models, setModels] = useState([])
    const [make, setMake] = useState();

    const [car, setCar] = useState({
        postedBy: 'All',
        make: 'All',
        model: 'All',
        bodyStyle: 'All',
        transmission: 'All',
        year: [INITIAL_CAR_STATE.year[0], INITIAL_CAR_STATE.year[1]],
        mileage: [INITIAL_CAR_STATE.mileage[0], INITIAL_CAR_STATE.mileage[1]],
        seats: [INITIAL_CAR_STATE.seats[0], INITIAL_CAR_STATE.seats[1]]
    })

    const [carList, setCarList] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    // NEED BIG REFACTOR
    // On submit, fetch car list and update the list

    const fetchCarList = async () => {
        try {
            const cars = await getCars();
            console.log("LLLLLLLLLLLLLLLLLLLLL", cars)
            setCarList(cars.cars)
            setIsLoading(false)
            console.log("Fetch cars", cars)
        } catch (e) {
            console.log("CarsListProvider: ", e)
        }
    }

    const onSelectMake = function (event, newValue) {
        setMake(newValue)
        // setModels(findModel(newValue))
    }

    useEffect(() => {
        console.log("useEffect")
        fetchCarList()
    }, [])

    return (
        <CarListContext.Provider value={{
            carList,
            isLoading,
            // onSelectModel,
            onSelectMake
        }} >
            {children}
        </CarListContext.Provider >
    )

}


export {
    CarListContext,
    CarListProvider
}