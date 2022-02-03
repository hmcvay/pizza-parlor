// // BUSINESS LOGIC

// // write pizza object constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
}

// write prototype method for increasing price based on size

Pizza.prototype.sizeCost = function () {
  if (this.size === "xl") {
    this.price += 9;
  } else if (this.size === "large") {
    this.price += 6;
  } else if (this.size === "medium") {
    this.price += 3;
  } else if (this.size === "small") {
    this.price += 0;
  };
  return this.price;
}

Pizza.prototype.toppingCost = function () {
  let toppings = [];
  this.toppings = toppings;
  if (toppings.includes("ex. cheese")) {
    this.price +=2;
  }
  if (toppings.includes("pepperoni")) {
    this.price +=1;
  }
  return this.price;
};

let myPizza = new Pizza("large", ["pepperoni", "ex. cheese"])
console.log(myPizza.sizeCost());

//   if (this.toppings.contains("ex. cheese")) {
//     this.price += 2;
//   }
//   if (this.toppings.contains("pepperoni" || "salami" || "sausage" || "anchovies")) {
//     this.price += 1;
//   }
//   if (this.toppings === "mushrooms" || "olives" || "garlic" || "peppers" || "onions" || "tomatoes") {
//     this.price += 1;
//   };
//   return this.price;
// }; 


 


//UI LOGIC

$(document).ready(function () {
  $("button#submitButton").click(function (event) {
    event.preventDefault();
    $("#addressBox").hide();
    $("#final-page").hide();
    $("#buildYourPizza").show();
  });
  $("button#sendButton").click(function () {
    $("#addressBox").hide();
    $("#buildYourPizza").hide();
    $("#final-page").show();
    $("input").val("");
  });
  $("button#start-again").click(function () {
    $("#final-page").hide();
    $("#buildYourPizza").hide();
    $("#addressBox").show();
    $("input").val("");
  });
});