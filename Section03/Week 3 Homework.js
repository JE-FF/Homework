const PIZZA_TOPPINGS = ["onions", "bell peppers", "pepperoncini", "olives", "mushrooms"];

const GREET_MESSAGE = "Welcome to jeff's Pizza! Our toppings are:";

function greetCustomer() {
    let toppingList = GREET_MESSAGE;

    for (i = 0; i < PIZZA_TOPPINGS.length; i++) {
        if (i < PIZZA_TOPPINGS.length - 1) {
            toppingList += ` ${PIZZA_TOPPINGS[i]},`;
        } else {
            toppingList += ` and ${PIZZA_TOPPINGS[i]}.`;
        }
    }
    console.log(toppingList);
};

// pretending there's a front-end providing size, crust, and toppings inputs.
function getPizzaOrder(size, crust, toppings) {
    let pizzaArr = [size, crust];
    let customerInputEcho = `One ${size} ${crust} pizza with `;

    if (toppings) {
        for(i = 0; i < toppings.length - 1; i++) {
// NOT DONE HERE! MUST ITERATE THROUGH TOPPINGS LIST TO CHECK IF CUSTOMER INPUT IS VALID

            pizzaArr.push(toppings[i]);
            customerInputEcho += `${toppings[i]}, `;
        }

        pizzaArr.push(toppings[toppings.length - 1]);
        customerInputEcho += `and ${toppings[toppings.length - 1]}`;
        console.log(`${customerInputEcho} coming up!`);
    } else {
        console.log(`One ${size} ${crust} cheese pizza coming up!`);
    }
    return pizzaArr;
};

function preparePizza(pizzaArr) {
    let pizzaObj = {size: pizzaArr[0], crust: pizzaArr[1]};
    let concatToppings = "";

    for (i = 2; i < pizzaArr.length; i++){
        if (i === pizzaArr.length - 1) {
            concatToppings += `and ${pizzaArr[i]}`;
        } else {
            concatToppings  += `${pizzaArr[i]}, `;
        }
    }
    pizzaObj.toppings = concatToppings;

    console.log("...Cooking Pizza...");

    return pizzaObj;
};

function servePizza(pizzaObj) {
    if (pizzaObj.toppings){
        console.log(`Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} crust pizza with ${pizzaObj.toppings}. Enjoy!`);
    } else {
        console.log(`Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} plain cheese pizza. Enjoy!`)

    }
};

// Multiple test cases
greetCustomer();

console.log("\n---FIRST PIZZA, ALL TOPPINGS---")

servePizza(preparePizza(getPizzaOrder("medium", "thin", ["onions", "bell peppers", "pepperoncini", "olives", "mushrooms"])));

console.log("\n---SECOND PIZZA, NO TOPPINGS---");

servePizza(preparePizza(getPizzaOrder("medium", "thin")));

console.log("\n---THIRD PIZZA, INVALID TOPPINGS---")

servePizza(preparePizza(getPizzaOrder("medium", "thin", ["toothpaste", "eggs", "stale crackers"])));