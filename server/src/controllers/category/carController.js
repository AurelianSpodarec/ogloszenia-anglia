const express = require('express')
const router = express.Router();
const { carService } = require('./../../services')

const StatusError = require('./../../errors/StatusError');
const catchExceptions = require('./../../errors/CatchException');
const multer = require('multer');

// const upload = multer({ dest: 'public/img/users' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const upload = multer({ storage });

router.get('/api/v1/cars', async (req, res) => {
    const cars = await carService.listCars(req.query);
    const length = await carService.listLength();

    res.status(200).json({
        length,
        cars
    })
})

// router.post('/api/v1/car',
//     // upload.single('coverImage'),
//     catchExceptions(async (req, res) => {
//         const car = await carService.createCar(req.body)
//         // const carFile = req.file.path ? req.fie.pat
//         // const car = await carService.createCar(Object.assign(req.body, req.file.path))
//         // car.coverImage = req.file.path

//         res.status(200).json({
//             status: 'success',
//             message: 'Car created',
//             data: {
//                 car
//             }
//         })

//         // createCar.save();
//     })
// );

router.post('/api/v1/car',
    // upload.single('coverImage'),
    catchExceptions(async (req, res) => {

        const car = await carService.createCar(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Car created',
            data: {
                car
            }
        })
    })
);

router.get('/api/v1/car/:id',
    catchExceptions(async (req, res, next) => {
        const car = await carService.getCarById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        })
    })
);

module.exports = router;