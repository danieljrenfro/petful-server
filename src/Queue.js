class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return null;
    }

    const node = this.first;

    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) {
      return null;
    }

    return this.first.value;
  }

  all() {
    const all = [];

    let currentNode = this.first;

    while (currentNode) {
      all.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return all;
  }
}

module.exports = Queue;
