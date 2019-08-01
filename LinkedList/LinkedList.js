class LinkedNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new LinkedNode(value);

    if (this.head === null) {
      return (this.head = newNode);
    }
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    return (currentNode.next = newNode);
  }
  get(index) {
    if (index < 0) {
      return null;
    }
    let i = 0;

    let currentNode = this.head;

    while (i < index && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode !== null ? currentNode.data : null;
  }
  remove(index) {
    if (index < 0) {
      throw new Error(`${index} is not legal`);
    }
    if (this.head === null) {
      throw new Error('List is empty');
    }
    if (index === 0) {
      const data = this.head.data;
      this.head = this.head.next;
      return data;
    }

    let currentNode = this.head;
    let prevNode = null;
    let i = 0;
    while (i < index && currentNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode !== null) {
      prevNode.next = currentNode.next;
      return currentNode.data;
    }

    throw new RangeError(`the index:${index} is out of range!`);
  }

  // 遍历性
  *[Symbol.iterator]() {
    let currentNode = this.head;
    while (currentNode !== null) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }
  // *values() {
  //     let currentNode = this.head;
  //     while (currentNode !== null) {
  //         yield currentNode.data;
  //         currentNode = currentNode.next;
  //     }
  // }
  // [Symbol.iterator]() {
  //     return this.values();
  // }
}
module.exports = LinkedList;
