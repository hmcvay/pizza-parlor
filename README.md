# _Pizza Parlor_

***

### A simple webpage designed for a pizza company, "Pizza.net", where a user can choose one or more individual toppings, a size, and style, to order a pizza and see the final cost.

#### Please view the first 20 seconds of [this](https://youtu.be/JUSqX7B5DXs) video before using this webpage.

<br>

#### By Hayley McVay <https://github.com/hmcvay>

<br>

***
<br>

## Description

_This webpage contains forms to select size, style, and toppings to create a pizza. After the user makes their choices, there will be a submit button to display total price._

_Live site [here](https://hmcvay.github.io/pizza-parlor)

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

### Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size."
<br>Code:
<br>**const pizza1 = new Pizza (["pineapple", "pepperoni"], "large");**
<br>Expected Output: Pizza (toppings: ["pineapple", "pepperoni"], size: "large")

<br>

Test: "Price should increase by 3 for each size above small"
<br>Code:
<br>**const pizza1 = new Pizza ("pineapple", "medium");**
<br>Expected Output: 10

<br>

Test: "Price should increase based on amount of toppings."
<br>Code:
<br>**const pizza1 = new Pizza (["pineapple", "pepperoni] "medium");**
<br>Expected Output: 12

<br>

Test: "Price should increase based on pizza style."
<br>Code:
<br>**const pizza1 = new Pizza ("medium", ["pineapple", "pepperoni], "deep dish");**
<br>Expected Output: 14

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