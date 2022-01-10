---
layout: page
title: "Classes in Javascript"
order: "4A"
permalink: /classes-in-js
---

## Classes

Before javascript classes:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());
```

With javascript classes:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
```

The following creates a new Person object, which will automatically call the constructor() of the Person class:

```js
let john = new Person("John Doe");
```

The getName() is called a method of the Person class. Like a constructor function, you can call the methods of a class using the following syntax:

```js
let name = john.getName();
console.log(name); // "John Doe"
```
