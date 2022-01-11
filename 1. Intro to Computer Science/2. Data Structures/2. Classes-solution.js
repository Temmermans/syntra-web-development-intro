/**
 * Create a shopping cart class to add products
 */
console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
class ShoppingCart {
  constructor() {
    this.products = [];
    this.total_price = 0;
    this.no_discount_price = 0;
    this.discount = 0;
    this.global_count = {};
  }

  addProduct(product) {
    this.products.push(product);
    this.total_price += product.price;
    this.no_discount_price = this.total_price;

    console.log(this.total_price);
  }

  quantity_check() {}

  //Sometimes a product is sold out and has to be replaced by a new one. Add a method replace(productName, replacementProduct) that looks for products with productName and replaces them by new instances of the product like replacementProduct. Notice that productName is a string, and replacementProduct is a Product. Also, bear in mind that you don't have to add the replacementProduct itself to the cart, but create new products like that one (whenever necessary).
  replace(productName, replacementProduct) {}

  cartStatus() {
    return "cart with: " + this.products + "; Total price: " + this.total_price + " euros";
  }
}

/**
 * Add products to the cart
 */
console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

/**
 * Create a calculator class using a fluent API
 * that does something like this:
 * calc
    .add(1, 2)
    .square()
    .display();
 */
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
class Calculator {
  total;

  constructor(start) {
    this.total = start || 0;
  }

  add(x, y) {
    this.total = this.total + (x + y);
    return this;
  }

  square() {
    this.total = this.total * this.total;
    return this;
  }

  display() {
    console.log(this.total);
    return this.total;
  }
}
