import request from './request';
import axios from 'axios';

//TODO: Create a function to manage this UGLY try catch

const userLogin = async (data) => {
    try {
        const res = await axios.post('http://localhost:3001/api/v1/user/login', data)
        return res;
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
    getUsers
}