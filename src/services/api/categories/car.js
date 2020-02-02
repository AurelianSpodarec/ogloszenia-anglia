import request from '../request';


const getCars = async (data) => {
    console.log(data, "getCars")

    // const schema = {
    //     postedBy: stringCase,
    //     make: stringCase,
    //     model: stringCase,
    //     bodyStyle: multipleCase,
    //     transmission: multipleCase,
    //     year: minMaxCase,
    //     mileage: minMaxCase,
    //     seats: minMaxCase,
    // };

    // const stringCase = function (value) {

    //     return '';
    // }

    // const buildSubQuery = function (key, value) {
    // if (!(key in schema)) throw new Error();
    // If empty
    // If string
    // }


    let query = 'cars?';

    const buildSubQuery = function (key, value) {
        console.log("Build query", key, value)
        // if (!(key in schema)) throw new Error();

        // if (!value == "") {
        console.log("INSIDE", key, value)
        if (value == '' || value == []) {
            return '';
        } else {
            return `${key}=${value}`
        }


    }

    const buildQuery = () => {
        if (!data) return 'cars';

        for (let [key, value] of Object.entries(data)) {
            // query += 'cars&'
            query += buildSubQuery(key, value)
            console.log("KAKAKA", buildSubQuery(key, value))
        }
    }

    buildQuery()

    const res = await request(query, "GET");
    console.log("REs", query)
    return await res;
}



const getCarById = async (id) => {
    const res = await request(`car/${id}`, 'GET');
    return await res;
}

const createCar = async (newCar) => {
    const res = await request(`car`, 'POST', newCar);
    return res;
}

const deleteCar = async (id) => {
    const res = await request(`car/${id}`, 'DELETE');
    return await res;
}

export {
    getCars,
    getCarById,
    createCar,
    deleteCar
}