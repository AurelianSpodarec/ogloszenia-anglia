import config from './../../config';
import axios from 'axios';

axios.defaults.withCredentials = true

const getCars = async (data) => {
    try {
        const res = await axios.get(`https://ogloszenia-anglia.herokuapp.com/api/v1/cars`)
        return res;
    } catch (err) {
        console.log("Car List", err)
    }
}

const getCarById = async (id) => {
    try {
        const res = await axios.get(`${config.apiUrl}car/${id}`)
        return res;
    } catch (err) {
        console.log("Car", err)
    }
}

// const createCar = async (car) => {

// }

// const deleteCar = async (id) => {

// }

export {
    getCars,
    getCarById
}