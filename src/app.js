require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('../config');
const peopleRouter = require('./people/people.router');
const petRouter = require('./pets/pets.router');


const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

const app = express();
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors({
  origin: CLIENT_ORIGIN
}));
app.use(express.json());

app.use(cors());

app.use('/api/people', peopleRouter);
app.use('/api/pets', petRouter);

app.get('/', (req, res) => {
  res.status(200).send('Hello, Petful! Use endpoints /api/pets and /api/people');
});

app.use(function errorHandler(error, req, res) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
