console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
// And create a couple of products

/**
 * Create a shopping cart class to add products
 */
console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
class ShoppingCart {
  constructor() {
    this.products = []; // empty at first
    this.products_mirror = this.products; //it should be updated with this.products, or?
    this.total_price = 0;
    this.total_price_mirror = this.total_price;
    this.no_discount_price = 0;
    this.discount = 0;
    this.global_count = {};
  }

  addProduct(product) {}

  quantity_check() {}

  //Sometimes a product is sold out and has to be replaced by a new one. Add a method replace(productName, replacementProduct) that looks for products with productName and replaces them by new instances of the product like replacementProduct. Notice that productName is a string, and replacementProduct is a Product. Also, bear in mind that you don't have to add the replacementProduct itself to the cart, but create new products like that one (whenever necessary).
  replace(productName, replacementProduct) {}

  cartStatus() {}
}

/**
 * Add products to the cart
 */
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
