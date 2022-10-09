## Promises

JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

```js
var promise = new Promise(function(resolve, reject) {
  // do thing, then…

  if (/* everything worked */) {
    resolve("See, it worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

### A Promise exists in one of these states

- Pending: initial state, neither fulfilled nor rejected.
- Fulfilled: operation completed successfully.
- Rejected: operation failed.

The Promise object works as proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.

This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

### Using ‘Then’ (Promise Chaining)

To take several asynchronous calls and synchronize them one after the other, you can use promise chaining. This allows using a value from the first promise in later subsequent callbacks.

```js
Promise.resolve("some")
  .then(function (string) {
    // <-- This will happen after the above Promise resolves (returning the value 'some')
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "thing";
        resolve(string);
      }, 1);
    });
  })
  .then(function (string) {
    // <-- This will happen after the above .then's new Promise resolves
    console.log(string); // <-- Logs 'something' to the console
  });

var add = function (x, y) {
  return new Promise((resolve, reject) => {
    var sum = x + y;
    if (sum) {
      resolve(sum);
    } else {
      reject(Error("Could not add the two values!"));
    }
  });
};

var subtract = function (x, y) {
  return new Promise((resolve, reject) => {
    var sum = x - y;
    if (sum) {
      resolve(sum);
    } else {
      reject(Error("Could not subtract the two values!"));
    }
  });
};

// Starting promise chain
add(2, 2)
  .then((added) => {
    // added = 4
    return subtract(added, 3);
  })
  .then((subtracted) => {
    // subtracted = 1
    return add(subtracted, 5);
  })
  .then((added) => {
    // added = 6
    return added * 2;
  })
  .then((result) => {
    // result = 12
    console.log("My result is ", result);
  })
  .catch((err) => {
    // If any part of the chain is rejected, print the error message.
    console.log(err);
  });
```

### Creating Promises around old callback functions

A Promise can be created from scratch using its constructor.

In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the setTimeout() function:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Mixing old-style callbacks and promises is problematic. If saySomething() fails or contains a programming error, nothing catches it. setTimeout is to blame for this.

Luckily we can wrap setTimeout in a promise. Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Basically, the promise constructor takes an executor function that lets us resolve or reject a promise manually. Since setTimeout() doesn't really fail, we left out reject in this case.

### Async/await

There’s a special syntax to work with promises, called “async/await”. It’s surprisingly easy to understand and use.

#### Async

Let’s start with the async keyword. It can be placed before a function, like this:

```js
async function f() {
  return 1;
}
```

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of 1; let’s test it:

```js
async function f() {
  return 1;
}

f().then(alert); // 1
```

#### Await

The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

### Common mistakes

> [!ATTENTION]
> Bad example! Spot 3 mistakes!

```js
doSomething()
  .then(function (result) {
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourthThing());
```

1. The first mistake is to not chain things together properly. This happens when we create a new promise but forget to return it. As a consequence, the chain is broken, or rather, we have two independent chains racing. This means doFourthThing() won't wait for doSomethingElse() or doThirdThing() to finish, and will run in parallel with them, likely unintended. Separate chains also have separate error handling, leading to uncaught errors.

2. The second mistake is to nest unnecessarily, enabling the first mistake. Nesting also limits the scope of inner error handlers, which—if unintended—can lead to uncaught errors.

3. The third mistake is forgetting to terminate chains with catch. Unterminated promise chains lead to uncaught promise rejections in most browsers.

> [!TIP]
> Better 💪

```js
doSomething()
  .then(function (result) {
    // If using a full function expression: return the promise
    return doSomethingElse(result);
  })
  // If using arrow functions: omit the braces and implicitly return the result
  .then((newResult) => doThirdThing(newResult))
  // Even if the previous chained promise returns a result, the next one
  // doesn't necessarily have to use it. You can pass a handler that doesn't
  // consume any result.
  .then((/* result ignored */) => doFourthThing())
  // Always end the promise chain with a catch handler to avoid any
  // unhandled rejections!
  .catch((error) => console.error(error));
```

### Promise API

There are 4 static methods in the Promise class:

- Promise.resolve
- Promise.reject
- Promise.all
- Promise.race

#### Promise.all

The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.

```js
var promise1 = Promise.resolve(catSource);
var promise2 = Promise.resolve(dogSource);
var promise3 = Promise.resolve(cowSource);

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values);
});
// expected output: Array ["catData", "dogData", "cowData"]
```
