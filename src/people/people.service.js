const Queue = require('../Queue');
const store = require('../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

const randomPeople = ['Bobby', 'Jon', 'Eveyln', 'Grayson', 'Caden', 'Jack', 'Archie', 'Olivia', 'Isabella', 'Emie', 'Nathan', 'Travis', 'James'];

function all() {
  let peopleList = people.all();

  if (peopleList.length < 5) {
    people.enqueue(
      randomPeople[Math.floor(Math.random() * randomPeople.length)]
    );
  }

  return people.all();
}

module.exports = {
  all,
  enqueue(person) { people.enqueue(person); },
  dequeue() { return people.dequeue(); }
};
