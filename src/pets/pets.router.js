const express = require('express');
const PetsService = require('./pets.service');
const People = require('../people/people.service');

const petRouter = express.Router();

petRouter
  .route('/')
  .get((req, res, next) => {
    const pets = PetsService.get();
    
    return res.json(pets);  
  });

petRouter
  .route('/:pet')  
  .delete((req, res, next) => {
    let pet = req.params.pet;
    let newFam = {};
    try {
      newFam.pet = PetsService.adopt(pet);
      newFam.owner = People.dequeue();
    } catch (e) {
      return res.status(400).json(e.message);
    }

    return res.json(newFam);
  });

module.exports = petRouter;
