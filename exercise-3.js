// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

const printPizzaPlace = function () {
  for (const [key, value] of Object.entries(dominos)) {
    console.log(key, value);
  }
};

console.log(printPizzaPlace());

const toppingsPriceRange = function (dominos) {
  const toppings = dominos.pizzaToppings;

  // start both lowest & highest with the FIRST value in the object
  const firstKey = Object.keys(toppings)[0];
  let lowest = toppings[firstKey];
  let highest = toppings[firstKey];

  for (const key in toppings) {
    const price = toppings[key];
    if (price < lowest) {
      lowest = price;
    }
    if (price > highest) {
      highest = price;
    }
  }

  return [lowest, highest];
};

console.log(toppingsPriceRange(dominos));

const calculateAverageRating = function (dominos) {
  const review = dominos.starReviews;
  let sum = 0;
  let count = 0;
  for (const key in review) {
    sum += review[key];
    count++;
  }

  return sum / count;
};

console.log(calculateAverageRating(dominos));
