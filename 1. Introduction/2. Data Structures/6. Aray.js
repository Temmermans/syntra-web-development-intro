/** Class representing an Aray, a fictional data structure similar to an array except that the underlying storage is a string */

class Aray {
  constructor() {
    this.storage = "";
  }
  /*
   * Pushes a value at the end of the aray
   * @param {string} value - the value to insert
   * @return {number} - the length of the aray
   */
  push() {}
  /*
   * Pops off the last value of the aray
   * @return {string} value - the popped value
   */
  pop() {}
  /*
   * Returns the new aray with all the items modified by the function passed in
   * @return {number} - the length of the aray
   */
  map(fn) {}
  /*
   * Returns the length of the aray
   * @return {number} - the length of the aray
   */
  length() {}
}
