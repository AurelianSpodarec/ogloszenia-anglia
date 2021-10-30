import config from './../config';
import request from './request';

const userLogin = async (data) => {
    const res = await request('user/login', 'POST', data);
    return await res;
}

const isLoggedIn = async () => {
    const res = await request('isLoggedIn', 'GET');
    return await res;
}

const userLogout = async () => {
    const res = await request('user/logout', 'GET');
    return await res;
}

const userRegister = async (data) => {
    const res = await request('user/signup', 'POST', data);
    return await res;
}

const getUsers = async () => {
    const res = await request('users', 'GET');
    return await res.json();
}

export {
    userLogin,
    userRegister,
    userLogout,
    getUsers,
    isLoggedIn
}
