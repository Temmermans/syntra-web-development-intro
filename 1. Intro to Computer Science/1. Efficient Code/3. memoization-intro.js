//Task: Write a function to make this array unique using loops
const isUnique = (arr) => {};

//Task: Transform this function to use only one loop
const isUnique = (arr) => {};

console.log(isUnique([1, 2, 3]) === true);

//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function (arr) {
  return arr.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // => [2,3,4]
