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
        console.log("INSIDE", key, value[0])
        if (value == '' || value == []) {
            return '';
        } else if (value.length === 2) {
            return `${key}[gte]=${value[0]}&${key}[lte]=${value[1]}&`
            // year[gte]=2013&year[lt]=2014
        } else {
            return `${key}=${value}&`
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

    console.log("REs", query)
    const res = await request(query, "GET");
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