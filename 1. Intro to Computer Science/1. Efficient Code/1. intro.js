/**
 * Look at the functions below, can you think of a way to
 * make the functions more efficient?
 */

function print_even_numbers() {
  let number = 2;

  while (number <= 100) {
    // if number is even, print it
    if (number % 2 === 0) {
      console.log(number);
    }

    number++;
  }
}

// print_even_numbers();
