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
        mileage: [0, 300000],
        seats: [1, 9],
    })

    const [modelsData, setModelsData] = useState([])

    const [carList, setCarList] = useState([])
    const [carsLength, setCarsLength] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const fetchCarList = async () => {
        try {
            // console.log("FETCH car list", car)
            const cars = await getCars(car);
            setCarList(cars.cars)
            setCarsLength(cars.length)
            setIsLoading(false)
        } catch (e) {
            console.log("CarsListProvider: ", e)
        }
    }



    const findModel = function (carBrand) {
        if (!carBrand) return;
        // if (!Make) { return };
        const selectedCarModel = INITIAL_CAR_STATE.make.find(item => item.name === carBrand.name).models
        return selectedCarModel;
    }


    const onYearChange = function (event, newValue) {
        // console.log("BBBBBB", event.target.name, newValue)
        setCar({ ...car, year: newValue })
    }

    const onSeatsChange = function (event, newValue) {
        setCar({ ...car, seats: newValue })
    }

    const onMileageChange = function (event, newValue) {
        setCar({ ...car, mileage: newValue })
    }


    const onChangeValue = function (e, value, name) {
        setCar({ ...car, [name]: value })
        if (name === 'make') {
            const carModels = findModel(car.make)
            // console.log("CAR MODELLLLLLS", carModels)
        }
    }

    const onFilter = function () {
        // console.log("On FIlter clicked", car)
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
            // onSelectMake,
            onYearChange,
            onChangeValue,
            onSeatsChange,
            onMileageChange,
            car,
            modelsData
        }} >
            {children}
        </CarListContext.Provider >
    )

}


export {
    CarListContext,
    CarListProvider
}