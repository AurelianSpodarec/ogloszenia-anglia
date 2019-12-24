import config from './../../config';
import axios from 'axios';

axios.defaults.withCredentials = true


const getCars = async () => {
    try {
        const res = await axios.get('http://localhost:3001/api/v1/cars')
        return res;
    } catch (err) {
        console.log("Car List", err)
    }
}

const getCarById = async (id) =>{
    try {
        const res = await axios.get(`http://localhost:3001/api/v1/car/${id}`)
        return res;
    } catch (err) {
        console.log("Car", err)
    }
}

export {
    getCars,
    getCarById
}