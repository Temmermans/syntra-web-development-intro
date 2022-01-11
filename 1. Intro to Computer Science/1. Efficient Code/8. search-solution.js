// Implemtent linear search, return the index of the item found
console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
function linear_search(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(linear_search([2, 6, 1, 1, 5, 4], 5));

//Implement binary search
console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
function binary_search(arr, search_value) {
  /**
   * First, we establish the upper and lower bounds of where the value we are searching for
   * can be. To start, the lower bound is the first value while the upper bound is the last
   */
  let lower_bound = 0;
  let upper_bound = arr.length - 1;

  /**
   * We begin a loop to inspect the middlemost value between the two limits
   */
  while (lower_bound <= upper_bound) {
    let midpoint = Math.round((upper_bound + lower_bound) / 2);

    const value_at_midpoint = arr[midpoint];

    /**
     * If the value is the one we are looking for, we are done.
     * If not, we change the lower or upper bound based on whether we need to guess higher or lower
     */
    if (search_value === value_at_midpoint) {
      return midpoint;
    } else if (search_value < value_at_midpoint) {
      upper_bound = midpoint - 1;
    } else if (search_value > value_at_midpoint) {
      lower_bound = midpoint + 1;
    }
  }

  /**
   * if we narrowed the bounds until they've reached eachother, the value we
   * are searching for is not contained within the array
   */
  return -1;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8], 5));
