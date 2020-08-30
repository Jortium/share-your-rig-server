require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./errorHandler');
const validateBearerToken = require('./validateBearerToken.js');
const UserRouter = require('./user/user-router.js');
const PartRouter = require('./part/part-router.js');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

app.use('/api/users', UserRouter);
app.use('/api/parts', PartRouter);

app.get('/', (req, res) => {
    res.send('Hello, boilerplate!');
});

app.use(errorHandler);

module.exports = app;
