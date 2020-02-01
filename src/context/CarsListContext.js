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
    const [carsLength, setCarsLength] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    console.log(make, "MAKEEEEEEEE")

    const fetchCarList = async () => {
        try {
            console.log("FETCH car list", car)
            const cars = await getCars(car);
            console.log("M", cars)
            setCarList(cars.cars)
            setCarsLength(cars.length)
            setIsLoading(false)
        } catch (e) {
            console.log("CarsListProvider: ", e)
        }
    }

    const onSelectMake = function (event, newValue) {
        console.log("Sidebar car", event, newValue)
        setMake(newValue)
        // setModels(findModel(newValue))
    }

    const onFilter = function () {
        console.log("On FIlter clicked")
        fetchCarList()
    }

    useEffect(() => {
        fetchCarList()
    }, [car.make])

    return (
        <CarListContext.Provider value={{
            carList,
            carsLength,
            isLoading,
            onFilter,
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