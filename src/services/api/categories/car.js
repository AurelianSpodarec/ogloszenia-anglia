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

const createCar = async (car) => {

    const res = await fetch(`${config.apiUrl}car`, request("POST", { "title": "CCCa" }))
        .then(res => res.json())
        .then(res => console.log(res));
    return res;
}

// const deleteCar = async (id) => {

// }

export {
    getCars,
    getCarById,
    createCar
}