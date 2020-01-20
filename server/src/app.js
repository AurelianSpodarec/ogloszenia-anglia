const express = require('express');
const app = express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const { userController, homeController, carController } = require('./controllers')

// Set Security HTTP headers
app.use(helmet())

//TODO: Delete this and add an ENV or PROD code
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.disable('x-powered-by');

// Limit requests from the same IP Address
const limiter = rateLimit({
    max: 700,
    windowMS: 30 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/api', limiter);

app.use(express.json({ limit: '100kb' }));
app.use(cookieParser());

app.use(mongoSanitize());
app.use(xss());
app.use(hpp({
    whitelist: [
        'price',
        'year',
    ]
}));

// app.use(express.serve(`$()`))

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     console.log("COOKIEE", req.cookies);
//     next()
// })

app.use(compression())

app.use('/uploads', express.static("uploads"))

app.use('/', userController, homeController, carController);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
});

module.exports = app;