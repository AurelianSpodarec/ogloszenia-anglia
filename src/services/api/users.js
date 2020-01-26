import config from './../config';
import request from './request';

const userLogin = async (data) => {
    const res = await request('user/login', 'POST', data);
    console.log(res, "User login")
    return await res;
}

const isLoggedIn = async () => {
    const res = await request('isLoggedIn', 'GET');
    console.log(res)
    return await res;
}

const userLogout = async () => {
    const res = await fetch(`${config.apiUrl}user/logout`, request("GET"))
    if (res.status === 'success') window.location.reload(true)
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
