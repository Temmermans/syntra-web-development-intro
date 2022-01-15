## Javascript references vs copying

One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

Let’s start with a primitive, such as a string.

Here we put a copy of message into phrase:

```js
let message = "Hello!";
let phrase = message;
```

Objects are not like that.

A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

Let’s look at an example of such a variable:

```js
let user = {
  name: "John",
};
```

The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.

We may think of an object variable, such as user, as like a sheet of paper with the address of the object on it.

When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

Now here’s why it’s important.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

```js
let user = { name: "John" };
let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

### Comparison by reference

Two objects are equal only if they are the same object.

For instance, here a and b reference the same object, thus they are equal:

```js
let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

let a = {};
let b = {}; // two independent objects

alert(a == b); // false
```

### Cloning and merging

Method 1: imperative

```js
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object
```

Method 2: Object.assign

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```

Method 2: Destructuring

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
const clone = { ...user, ...permissions1, ...permissions2 };

// now user = { name: "John", canView: true, canEdit: true }
```
