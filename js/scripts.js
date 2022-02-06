// BUSINESS LOGIC

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
}

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
    if (this.toppings.includes("ex. cheese")) {
      this.price +=2;
    };
    if (this.toppings.includes("pepperoni")) {
      this.price +=1;
    };
    if (this.toppings.includes("salami")) {
      this.price +=1;
    };
    if (this.toppings.includes("sausage")) {
      this.price +=1;
    };
    if (this.toppings.includes("anchovies")) {
      this.price +=1;
    };
    if (this.toppings.includes("mushrooms")) {
      this.price +=1;
    };
    if (this.toppings.includes("olives")) {
      this.price +=1;
    };
    if (this.toppings.includes("garlic")) {
      this.price +=1;
    };
    if (this.toppings.includes ("peppers")) {
      this.price +=1;
    };
    if (this.toppings.includes("onions")) {
      this.price +=1;
    };
    if (this.toppings.includes("tomatoes")) {
      this.price +1;
    };
    return this.price;
  }
  
let myPizza = new Pizza("large", ["pepperoni", "salami", "olives", "onions", "ex. cheese"])
console.log(myPizza.sizeCost());
console.log(myPizza.toppingCost());


 


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