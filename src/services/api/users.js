import config from './../config';
import axios from 'axios';

axios.defaults.withCredentials = true
const userLogin = async (data) => {
    try {
        const res = await axios.post(`${config.apiUrl}user/login`, data)
        console.log(res)
        return res;
    } catch (err) {
        console.warn(err)
    }
}

const isLoggedIn = async () => {
    const res = await axios.get(`${config.apiUrl}isLoggedIn`)
    console.log("Is logged in", res)
    return res;
}

const userLogout = async () => {
    try {
        const res = await axios.get(`${config.apiUrl}user/logout`)
        console.log(res)
        if (res.data.status === 'success') window.location.reload(true)
    } catch (err) {
        console.warn(err)
    }
}

const userRegister = async (data) => {
    try {
        const res = await axios.post(`${config.apiUrl}user/signup`, data)
        return res;
    } catch (err) {
        console.warn(err)
    }
}

const getUsers = async () => {
    const res = await axios.get(`${config.apiUrl}users`)
    console.log("Get users", res)
    return res;
}

export {
    userLogin,
    userRegister,
    userLogout,
    getUsers,
    isLoggedIn
}