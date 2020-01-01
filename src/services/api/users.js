import request from './request';
import axios from 'axios';

//TODO: Create a function to manage this UGLY try catch
// const transport = axios.create({
//   withCredentials: true
// })
axios.defaults.withCredentials = true
const userLogin = async (data) => {
    try {
        const res = await axios.post('http://localhost:3001/api/v1/user/login', data)
        console.log(res)
        return res;
    } catch (err) {
        console.warn(err)
    }
}

const isLoggedIn = async () => {
    const res = await axios.get('http://localhost:3001/api/v1/isLoggedIn')
    // .then(res => {
    //     if (res.data.isLogged === true) {
    //         return res;
    //     } else {
    //         return res;
    //     }
    // })
    console.log(res)
    return res;
}

const userLogout = async () => {
    try {
        const res = await axios.get('http://localhost:3001/api/v1/user/logout')
        console.log(res)
        if (res.data.status === 'success') window.location.reload(true)
    } catch (err) {
        console.warn(err)
    }
}

const userRegister = async (data) => {
    try {
        const res = await axios.post('http://localhost:3001/api/v1/user/signup', data)
        return res;
    } catch (err) {
        console.warn(err)
    }
}

const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/api/v1/users')
    return res;
}

export {
    userLogin,
    userRegister,
    userLogout,
    getUsers,
    isLoggedIn
}