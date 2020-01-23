import config from './../config';
import request from './request';

const userLogin = async (data) => {
    const res = await fetch(`${config.apiUrl}user/login`, request("POST", data))
    console.log("USER LOGIN", await res.json())
    return res.json();
}

const isLoggedIn = async () => {
    const res = await fetch(`${config.apiUrl}isLoggedIn`, request("GET"))
    // console.log("IS LOGGED IN", await res.json())
    return await res.json();
}

const userLogout = async () => {
    const res = await fetch(`${config.apiUrl}user/logout`, request("GET"))
    if (res.data.status === 'success') window.location.reload(true)
}

const userRegister = async (data) => {
    const res = await fetch(`${config.apiUrl}user/signup`, request("POST", data))
    return await res.json();
}

const getUsers = async () => {
    const res = await fetch(`${config.apiUrl}users`, request("GET"))
    return await res.json();
}

export {
    userLogin,
    userRegister,
    userLogout,
    getUsers,
    isLoggedIn
}