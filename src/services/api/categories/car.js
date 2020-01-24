import config from './../../config';
import request from '../request';

// KY: https://golb.hplar.ch/2019/08/ky.html - because AXIOS is outdated and unmaintained

const getCars = async (data) => {
    const res = await fetch(`${config.apiUrl}cars`, request("GET"))
    return await res.json();
}

const getCarById = async (id) => {
    const res = await fetch(`${config.apiUrl}car/${id}`, request("GET"))
    return await res.json();
}

const createCar = async (newCar) => {
    const res = await fetch(`${config.apiUrl}car`, request("POST", newCar))
    return res.json();
}

const deleteCar = async (id) => {
    const res = await fetch(`${config.apiUrl}car/${id}`, request("DELETE"))
    return await res.json();
}

export {
    getCars,
    getCarById,
    createCar,
    deleteCar
}