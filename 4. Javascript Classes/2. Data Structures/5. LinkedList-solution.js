/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
  exists - function - accepts a value and checks if th value is present in
                      the linked list
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
*/

export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  length() {
    return this.length;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      // set next on the old tail to the new node
      this.tail.next = node;
    }
    this.tail = node;
  }

  serialize() {
    if (this.length === 0) return [];

    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  _find(index) {
    if (index > this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  get(index) {
    return this._find(index).value;
  }

  delete(index) {
    const deleted = this._find(index);
    if (index === 0) {
      // if we want to delete the head,
      // we make the second element the new head
      this.head = deleted.next;
    } else {
      const node_before_deleted_node = this._find(index - 1);
      node_before_deleted_node.next = deleted.next;
    }
    this.length--;
    return deleted.value;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  exists(value) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.value === value) return counter;
      counter++;
      current = current.next;
    }
    return -1;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
