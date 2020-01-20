// User
const UserService = require("./user/UserService");
const UserModel = require("./user/UserModel");

// Categories
const CarModel = require('./category/car/CarModel');
const CarService = require('./category/car/CarService');
const HomeModel = require('./category/home/HomeModel');
const HomeService = require('./category/home/HomeService');

module.exports = {
    userService: new UserService(UserModel),
    //Categories
    carService: new CarService(CarModel),
    homeService: new HomeService(HomeModel)
}