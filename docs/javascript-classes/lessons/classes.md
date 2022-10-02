## Classes

Before diving deeper into classes, it might be a good idea to look at prototypical inheritance in javascript.
JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended. This is known as prototypical inheritance and differs from class inheritance. Among popular object-oriented programming languages, JavaScript is relatively unique, as other prominent languages such as PHP, Python, and Java are class-based languages, which instead define classes as blueprints for objects.

### JavaScript Prototypes

Every object in JavaScript has an internal property called `[[Prototype]]`. We can demonstrate this by creating a new, empty object.

```js
let x = {};
```

> [!NOTE]
> This is the way we would normally create an object, but note that another way to accomplish this is with the object constructor: `let x = new Object()`.

> [!TIP]
> The double square brackets that enclose `[[Prototype]]` signify that it is an internal property, and cannot be accessed directly in code.

To find the `[[Prototype]]` of this newly created object, we will use the getPrototypeOf() method.

```js
Object.getPrototypeOf(x);

/*
 * It is important to note that .__proto__ is a legacy feature
 * and should not be used in production code, and it is not present in every modern browser.
 */
x.__proto__;
```

It is important that every object in JavaScript has a [[Prototype]] as it creates a way for any two or more objects to be linked. Also build in types.

### Prototype Inheritance

When you attempt to access a property or method of an object, JavaScript will first search on the object itself, and if it is not found, it will search the object’s `[[Prototype]]`. If after consulting both the object and its `[[Prototype]]` still no match is found, JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.

At the end of the prototype chain is `Object.prototype`. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null.

In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString().

```js
x.toString();
```

Let’s look at another type of object. If you have experience Working with Arrays in JavaScript, you know they have many built-in methods, such as `pop()` and `push()`. The reason you have access to these methods when you create a new array is because any array you create has access to the properties and methods on the `Array.prototype`.

We can test this by creating a new array.

```js
let y = [];

y.__proto__;

const z = function () {};

z.__proto__;
```

Every object in javascript has a hidden `[[Prototype]]` property.

## Now for the classes...

Until recently, industrious developers used constructor functions to mimic an object-oriented design pattern in JavaScript. The language specification ECMAScript 2015, often referred to as ES6, introduced classes to the JavaScript language. Classes in JavaScript do not actually offer additional functionality, and are often described as providing “syntactical sugar” over prototypes and inheritance in that they offer a cleaner and more elegant syntax. Because other programming languages use classes, the class syntax in JavaScript makes it more straightforward for developers to move between languages.

### Classes are functions

A JavaScript class is a type of function. Classes are declared with the class keyword. We will use function expression syntax to initialize a function and class expression syntax to initialize a class.

```js
// Initializing a function with a function expression
const x = function () {};

// Initializing a class with a class expression
const y = class {};
```

We can access the `[[Prototype]]` of an object using the `Object.getPrototypeOf()` method. Let’s use that to test the empty function we created.
The code declared with function and class both return a function `[[Prototype]]`.

### Defining a class

A constructor function is initialized with a number of parameters, which would be assigned as properties of this, referring to the function itself. The first letter of the identifier would be capitalized by convention.

```js
// Initializing a constructor function
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
const spiderman = new Hero("Peter Parker", 2);

//When we translate this to the class syntax, shown below, we see that it is structured very similarly.
// Initializing a class definition
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}
const thor = new Hero("Thor", 4);
```

### Defining class methods

The common practice with constructor functions is to assign methods directly to the prototype instead of in the initialization, as seen in the `greet()` method below.

```js
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};
```

With classes this syntax is simplified, and the method can be added directly to the class. Using the method definition shorthand introduced in ES6, defining a method is an even more concise process.

```js
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`;
  }
}

const thor = new Hero("Thor", 4);

// this won't work
Hero.greet();

thor.greet();
// logs: Thor says hello.
```

### Extending classes

An advantageous feature of constructor functions and classes is that they can be extended into new object blueprints based off of the parent. This prevents repetition of code for objects that are similar but need some additional or more specific features.

```js
// Creating a new class from the parent
class Mage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level);

    // Add a new property
    this.spell = spell;
  }
}
const hero2 = new Mage("Lejon", 2, "Magic Missile");
```

### Static methods and properties

Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

```js
class Hero {
  static inventorySpace = 10;
  static levelUp() {
    console.log("leveling");
  }

  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`;
  }
}
const thor = new Hero("Thor", 4);

// this wont work
thor.invetorySpace;
thor.levelUp();

// this will
Hero.inventorySpace;
Hero.levelUp();
```

### Private and Public Methods/Properties

Class fields are public by default. You can mark properties as private using the `#`. Private members are not native to the language before this syntax existed.

```js
// Creating a new class from the parent
class Mage extends Hero {
  #power = 12;
  #calculateDamage() {
    console.log("calculating damage", this.power);
  }

  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level);

    // Add a new property
    this.spell = spell;
  }
}
const gandalf = new Mage("Lejon", 2, "Magic Missile");

//this wont work
gandalf.power;
gandalf.calculateDamage();
```

### Abstract classes and methods

Define an abstract class in Typescript using the abstract keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.

An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.

```js
abstract class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  abstract find(string): Person;
}

class Employee extends Person {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): Person {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1);
  }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find("Steve");
```

Javascript has no native way to implement abstract classes/methods. We can however, use a workaround to get the desired effect:

```js
/**
 * Abstract Class Animal.
 *
 * @class Animal
 */
class Animal {
  constructor() {
    if (this.constructor == Animal) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  say() {
    throw new Error("Method 'say()' must be implemented.");
  }

  eat() {
    console.log("eating");
  }
}
```
