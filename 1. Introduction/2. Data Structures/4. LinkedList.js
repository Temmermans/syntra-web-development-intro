/** Class representing a Linked List */

class LinkedList {
  constructor(value) {}
  /*
   * Inserts a new value to the end of the linked list
   * @param {*} value - the value to insert
   */
  insert(value) {}
  /*
   * Deletes a node
   * @param {*} node - the node to remove
   * @return {*} value - the deleted node's value
   */
  remove() {}
  /*
   * Removes the value at the end of the linked list
   * @return {*} - the removed value
   */
  removeTail() {}
  /*
   * Searches the linked list and returns true if it contains the value passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  contains(value) {}
  /*
   * Checks if a node is the head of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the head, otherwise false
   */
  isHead(node) {}
  /*
   * Checks if a node is the tail of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the tail, otherwise false
   */
  isTail(node) {}
}

const myList = new LinkedList(1);
