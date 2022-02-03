// // BUSINESS LOGIC

// // write pizza object constructor
function Pizza(size) {
  this.size = size
  this.toppings = toppings
  this.price = 7
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
  }
  return this.price;
};


Pizza.prototype.toppingCost = function () {

}


 


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