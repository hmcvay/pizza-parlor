// // BUSINESS LOGIC

// // //write cart constructor
function Cart() {
  this.pizzasOrdered = {};
  this.currentId = 0;
  this.totalPrice = 0;
}

// // //write prototype method for adding pizzas to cart
Cart.prototype.addPizzas = function(pizza) {
  pizza.id = this.assignId();
  this.pizzasOrdered[pizza.id] = pizza;
};

// // //write prototype method for assigning ids to pizzas
Cart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// // write ptototype method for finding pizzas by id
Cart.prototype.findPizza = function(id) {
  if (this.pizzasOrdered[id] != undefined) {
    return this.pizzasOrdered[id];
};
}

Cart.prototype.getTotal = function() {

}

// // //test out adding to Cart//
// // let myCart = new Cart ();
// // let pizza1 = new Pizza ("pineapple", "large");
// // let pizza2 = new Pizza ("pepperoni", "small");
// // myCart.addPizzas(pizza1);
// // myCart.addPizzas(pizza2);
// // console.log(myCart);

// // write pizza object constructor
function Pizza(toppings, size, style) {
  this.toppings = toppings // [] instead??
  this.size = size
  this.style = style
  this.price = 7
}

// write prototype method for increasing price based on size

Pizza.prototype.sizeCost = function () {
  this.price = 7;
  if (this.size === "xl") {
    this.price += 9;
  } else if (this.size === "large") {
    this.price += 6;
  } else if (this.size === "medium") {
    this.price += 3;
  } else if (this.size === "small") {
    this.price += 0;
  }
  return this.price; //why is this not adding to this.price??
  };

  Pizza.prototype.toppingCost = function () {
    //should this.toppings be actually an empty [], and we run a loop here to assign price for >= 2 toppings??
  }


 


//UI LOGIC

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
    $("input").val("");
  });
  $("button#start-again").click(function (event) {
    event.preventDefault();
    $("#final-page").hide();
    $("#buildYourPizza").hide();
    $("#addressBox").show();
    $("input").val("");
  });
});