/**
 * This is a fairly pointless typescript file but does have
 * a couple of interesting things when playing around with the target
 * flag in our tsconfig.json file.
 *
 * Promises where not introduced until ES6
 * Async/Await was not introduced until ES8
 */

/**
 * Create a promise that will resolve after a certain number of milliseconds
 * @param ms number of milliseconds before it expires
 */
function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Add two numbers together
 * @param a
 * @param b
 */
export async function addNumbers(a: number, b: number) {
  await timeout(1000);
  return a + b;
}

// RUN THE PROGRAM -- Notice the tooltips in VSCode
(async () => {
  const result = await addNumbers(1, 2);
  console.log(result);
})();

// Change the target in tsconfig.json to es6 and run the program again
// Check the dist folder for the output
