# _Pizza Parlor_

***

### A simple webpage designed for a pizza company, "Pizza.net", where a user can choose one or more individual toppings, and a size, to order a pizza and see the final cost.

<br>

#### By Hayley McVay <https://github.com/hmcvay>

<br>

***
<br>

## Description

_This webpage contains SELECT BOXES(????) in two categories - toppings, and size - with multiple options per category for the user to choose from. After the user makes their choices there will be a submit button to display total price._

_Live site: <https://hmcvay.github.io/pizza-parlor>_

<br>

***

<br>

## Setup/Installation Requirements

- _Connect to wifi (or hard-wire connection)_
- _Install git via the computer terminal_
- _Use the "cd desktop" command to navigate to the desktop_
- _Go to [this](https://github.com/hmcvay) GitHub account, and select the "pizza-parlor" repository_
- _Once you have selected the repository, copy the URL_
- _Use the terminal to paste the URL by entering: "git clone 'PASTE URL HERE'" (do not include the " ")_
- _You may now enter the file saved to your desktop, and open the index.html file_

<br>

***

<br>

## Technologies Used

- _Javascript_
- _jQuery_
- _HTML_
- _CSS_

<br>

***

<br>

## Tests

### Describe: Cart()

Test: "It should return a Cart object that holds all the ordered Pizza objects"
<br>Code:
<br>**const myCart = new Cart()
<br>Expected Output: myCart (orderedPizzas: "undefined")

<br>

Test: "It should add Pizza object to Cart constructor."
<br>Code:
<br>**const myCart = new Cart ("pizza1")
<br>Expected Output: myCart(orderedPizzas: "pizza1")

<br>

Test: "It should assign id to Pizza objects in Cart constructor."
<br>Code:
<br>**const myCart = new Cart ("pizza1")
<br>Expected Output: myCart(orderedPizzas: "pizza1", 1)

### Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size."
<br>Code:
<br>**const pizza1 = new Pizza (["pineapple", "pepperoni"], "large");**
<br>Expected Output: Pizza (toppings: ["pineapple", "pepperoni"], size: "large")

<br>

Test: "Base price should increase by 3 if Medium is selected."
<br>Code:
<br>**const pizza1 = new Pizza ("pineapple", "medium");**
<br>Expected Output: 10

<br>

Test: "It should return string array of range of values within inputted number."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, 1, 2, 3, 4, 5]"

<br>

Test: "If the string array of values includes 3, push 'Won't you be my neighbor' instead of '3'."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, 1, 2, "Won't you be my neighbor?", 4, 5]"

<br>

Test: "If the string array of values includes 2, push 'boop' instead of '2'."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, 1, "boop", 3, 4, 5]"

<br>

Test: "If the string array of values includes 1, push 'beep' instead of '1'."
<br>Code:
<br>**const num = "5";**
<br>**beepBoop(num);**
<br>Expected Output: "[0, "beep", 2, 3, 4, 5]"

<br>

***

<br>

## Known Bugs

- _No known issues yet._
- _Please report any you find._

<br>

***

<br>

## License

[ISC](https://choosealicense.com/licenses/isc)

_For any problems, please file an issue on Github. Pull Requests welcome._

Copyright (c) _2022_ _Hayley McVay_