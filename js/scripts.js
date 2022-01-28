// BUSINESS LOGIC

//write cart constructor
function Cart() {
  this.pizzasOrdered = {};
  this.currentId = 0;
}

//write prototype method for adding pizzas to cart
Cart.prototype.addPizzas = function(pizza) {
  pizza.id = this.assignId();
  this.pizzasOrdered[pizza.id] = pizza;
};

//write prototype method for assigning ids to pizzas
Cart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//test out adding to Cart//
let myCart = new Cart ();
let pizza1 = new Pizza ("pineapple", "large");
let pizza2 = new Pizza ("pepperoni", "small");
myCart.addPizzas(pizza1);
myCart.addPizzas(pizza2);
console.log(myCart);

// write pizza object constructor
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
  //this.basePrice = 7
  this.price = 0
}

// write prototype method for increasing price based on size

Pizza.prototype.addSize = function () {
  if (this.size === "family") {
    this.price = 16
  } else if (this.size === "large") {
    this.price = 13
  } else if (this.size === "medium") {
    this.price = 10
  } else {
    this.price = 7
  }
  this.price = price
};
let pizza1 = new Pizza ("pineapple", "family");
console.log(pizza1);












// USER INTERFACE LOGIC