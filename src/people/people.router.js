const express = require('express');
const json = require('body-parser').json();

const PeopleService = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  const people = PeopleService.all();

  return res.json(people);
});

router.post('/', json, (req, res) => {
  let { name } = req.body;
  PeopleService.enqueue(name);

  let peopleList = PeopleService.all();
  res.status(201).json(peopleList[peopleList.length - 1]);
});

module.exports = router;
