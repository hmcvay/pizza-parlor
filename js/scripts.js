$(document).ready(function () {
  $("button#submitButton").click(function (event) {
    event.preventDefault();
    $("#addressBox").hide();
    $("#final-page").hide();
    $("#buildYourPizza").show();
  });
  $("button#sendButton").click(function (event) {
    event.preventDefault();
    $("#addressBox").hide();
    $("#buildYourPizza").hide();
    $("#final-page").show();
  });
  $("button#start-again").click(function (event) {
    event.preventDefault();
    $("#final-page").hide();
    $("#buildYourPizza").hide();
    $("#addressBox").show();
  });
});

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
  let basePrice = 7
  if (this.size === "family") {
    basePrice += 9
  } else if (this.size === "large") {
    basePrice += 6
  } else if (this.size === "medium") {
    basePrice += 3
  } else {
    basePrice;
  }
  return basePrice = this.price;
 
};


//UI
// $(document).ready(function () {
// 	$('button#test').click(function () {
//     $('#test').show();
//   });
// });