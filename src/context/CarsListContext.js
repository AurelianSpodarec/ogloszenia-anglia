import React, { createContext, useContext, useEffect, useState } from 'react'

import { getCars } from '../services/api/categories/car';

import { INITIAL_CAR_STATE } from '../utils/data/menu'

const CarListContext = createContext();

function CarListProvider({ children }) {

    const [car, setCar] = useState({
        postedBy: '',
        make: '',
        model: '',
        bodyStyle: [],
        transmission: '',
        year: [1960, 2020],
        mileage: '',
        seats: [1, 9],
    })

    const [carList, setCarList] = useState([])
    const [carsLength, setCarsLength] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const fetchCarList = async () => {
        try {
            console.log("FETCH car list", car)
            const cars = await getCars(car);
            setCarList(cars.cars)
            setCarsLength(cars.length)
            setIsLoading(false)
        } catch (e) {
            console.log("CarsListProvider: ", e)
        }
    }


    const onSelectMake = function (event, newValue) {
        setCar({ ...car, make: newValue })
    }

    const onYearChange = function (event, newValue) {
        setCar({ ...car, year: newValue })
    }


    const onFilter = function () {
        console.log("On FIlter clicked", car)
        fetchCarList()
    }

    useEffect(() => {
        fetchCarList()
    }, [])

    return (
        <CarListContext.Provider value={{
            carList,
            carsLength,
            isLoading,
            onFilter,
            // onSelectModel,
            onSelectMake,
            onYearChange,
            car
        }} >
            {children}
        </CarListContext.Provider >
    )

}


export {
    CarListContext,
    CarListProvider
}