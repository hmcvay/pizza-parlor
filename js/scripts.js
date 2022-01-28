// BUSINESS LOGIC

// write pizza object constructor
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
  this.basePrice = 7
}

// write prototype method for increasing based on size

Pizza.prototype.addSize = function () {
  if (this.size = "family") {
    return this.basePrice =+ 9 
  // } else if (this.size = "large") {
  //   return this.basePrice += 6
  // } else if (this.size = "medium") {
  //   return this.basePrice += 3
  // } else {
  //   return this.basePrice
  // }
  }
};
let pizza1 = new Pizza ("pineapple", "family");
console.log(pizza1);












// USER INTERFACE LOGIC