const pizzaPlace = "Jeff's Pizza";
const numberOfToppings = 11;

console.log(pizzaPlace + " " + typeof(pizzaPlace));
console.log(numberOfToppings + " " + typeof(numberOfToppings));

console.log(`${pizzaPlace} serves ${numberOfToppings} kinds of toppings.`);

if (numberOfToppings >= 10) {
    console.log("A whole lot of pizza.");
} else {
    console.log("Quality, not quantity.");
}

for (i = 2; i < numberOfToppings; i += 2) {
    console.log(i);
}