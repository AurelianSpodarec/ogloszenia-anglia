import request from '../request';

const getCars = async (data) => {
    console.log(data, "getCars")

    // DATA:
    // const [car, setCar] = useState({
    //     postedBy: '',
    //     make: '',
    //     model: '',
    //     bodyStyle: '',
    //     transmission: '',
    //     year: [1960, 2020],
    //     mileage: '',
    //     seats: [1, 9]
    // })

    // year[gte]=2010&year[lt]=2017

    const res = await request(`cars`, "GET");
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