/**
 * Write a function that prints every even number of a list of numbers
 * O(N / 2)
 */

function print_even_numbers(arr) {
  let number = 2;

  while (number <= arr.length) {
    console.log(number);

    number += 2;
  }
}

/*
Answer: O(N / 2). Linear time complexity.
*/

/**
 * Look at the functions below, what is the time complexity?
 */

// 1. Even or odd

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}

/*
Answer: O(1). Constant run time complexity.
Reasoning: Because you're only ever taking one value, there is no "loop" to go through. 
Even as the value gets bigger, you simply divide it by 2 and see whether it returns an integer or a float.
*/

// 2. Are You Here?

function areYouHere(arr1, arr2) {
  let foundAll = true;

  for (let [index, itemFromArray1] of arr1) {
    if (!arr2.includes(itemFromArray1)) {
      foundAll = false;
      break;
    }
  }

  return foundAll;
}

function areYouHere2(arr1, arr2) {
  return arr1.every((itemFromArray1) => arr2.includes(itemFromArray1));
}

function areYouHere3(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/*
Answer: O(n^2). Quadratic run time complexity.
Reasoning: For each run through the first loop, you have to run through the entire second loop.
If you add even just one more item to `arr1`, you have to run another full loop through `arr2`.
So it's quadratic because as N doubles (taking N as `arr1.length` or `arr2.length`), the time it takes
will increase exponentially (N * N).
UPDATE: As per the comments below, the above answer assumes somewhat naively that the two arrays would have the same lengths.
It's quite likely that they don't have the same lengths; therefore the complexity would be in fact O(n*m) instead of O(n^2).
*/

// 3. Doubler

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/*
Answer: O(n). Linear run time complexity.
Reasoning: As `array.length` increases, the number of iterations increases at the same rate.
This is because you don't have to loop any more than once: however many items are in the array
is how many times you run the function.
*/

// 4. Naive Search

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/*
Answer: O(n). Linear run time complexity.
Reasoning: Same as above with the doubler. You have to check each and every item once and only once
in order to determine whether you've got a match.
*/

// 5. Creating Pairs

function createPairs(arr) {
  //let ticks = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
      //ticks++;
    }
  }
  //console.log(ticks);
}

/* Answer: O(n^2). Quadratic run time complexity.
Reasoning: The first loop has O(n) complexity, as with each new addition, the number of times
you run through the loop increases by one. As the inner loop also has O(n) complexity, together they have 
quadratic run time complexity.
*/

// 6. Computing Fibonacci Numbers

function generateFib(num) {
  let result = [];
  //let ticks = 0;
  for (let i = 1; i <= num; i++) {
    //ticks++;
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  //console.log(ticks);
  return result;
}

/* Answer: O(n). Linear run time complexity.
Reasoning: As you add 1 to `num`, the run time complexity increases at the same rate. 
*/

// 7. Efficient Search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

/* Answer: O(log n). Logarithmic run time complexity.
Reasoning: Cutting `array.length` in half in each iteration, the time complexity increases slowly, in a logarithmic fashion.
*/

// 8. Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Answer: O(1). Constant run time complexity.
Reasoning: With no iteration occurring, selecting an element at random from an array has constant time complexity.
*/

// 9. Is It Prime?

function isPrime(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

/* Answer: O(n). Linear run time complexity.
Reasoning: Disregarding the constant time it takes to check the first if condition, this function is linear,
as it iterates through each item once and only once.
*/

// 10. Factorial of a number w/ recursion

function factorialOf(n) {
  switch (n) {
    case 0:
    case 1:
      return 1;
    default:
      return n * factorialOf(n - 1);
  }
}

/* Answer: O(n). Linear run time complexity.
Reasoning: This function is being called recursively n times before reaching the base case.
*/
