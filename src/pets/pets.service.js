const Queue = require('../Queue');
const store = require('../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    const petsNextInLine = {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    };

    if (!petsNextInLine.cat) {
      store.cats.forEach(cat => {
        pets.cats.enqueue(cat);
      });
      
      petsNextInLine.cat = pets.cats.show();
    }

    if (!petsNextInLine.dog) {
      store.dogs.forEach(dog => {
        pets.dogs.enqueue(dog);
      });

      petsNextInLine.dog = pets.dogs.show();
    }

    return petsNextInLine;
  },

  adopt(type) {
    if (type === 'dog') {
      return pets.dogs.dequeue();
    }
    
    if (type === 'cat') {
      return pets.cats.dequeue();
    }
  }
};
