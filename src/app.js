require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./errorHandler');
const validateBearerToken = require('./validateBearerToken.js');
// const userRouter = require('./users/user-router.js');
const GPURouter = require('./gpu/gpu-router.js');
const CPURouter = require('./cpu/cpu-router.js');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

app.use('/api/gpu', GPURouter);
app.use('/api/cpu', CPURouter);
// app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello, boilerplate!');
});

app.use(errorHandler);

module.exports = app;
