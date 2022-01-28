// BUSINESS LOGIC

//write cart constructor
function Cart() {
  this.pizzasOrdered = {};
  this.assignId = 0;
}

//write prototype method for adding pizzas to cart
Cart.prototype.addPizzas = function(pizza) {
  pizza.id = this.assignId();
  this.pizzasOrdered[pizza.id] = pizza;
};

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