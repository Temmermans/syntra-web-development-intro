// typescript is able to infer the type of the variable
let age = 30;
// if we try to change the type of the variable, we get an error
//age = "30";

/*********************
 * In typescript variables are born with the type of value.
 * Although you can cast or make them more specific
 * You can't safely change it to another type
 **********************/

// notice the type is 6 -> this is called a literal type
const newAge = 6;

function endTime() {
  const RANDOM_WAIT_TIME = Math.floor(Math.random() * 1000);

  let startTime = Date.now();
  // the type is any -> the normal way js works
  // add in a type annotation to make it more specific
  // let endTime: Date;
  let endTime;

  setTimeout(() => {
    endTime = Date.now();
  }, RANDOM_WAIT_TIME);
}

// check the tooltip
// without annotations,anything goes in typescript so we will not be able to more quickly catch bugs

// 👉 add type annotations to the function below
function add1(a, b) {
  return a + b;
}
// 👉 change one of the args to a string and see what happens
const result = add(1, 2);

// you can also add type annotations to the return value
// function add2(a: number, b: number): number {}
