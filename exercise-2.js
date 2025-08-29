/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //
console.log(typeof papaJohns.name);
console.log(typeof papaJohns.slogan);
console.log(typeof papaJohns.cuisines);
console.log(typeof papaJohns.pizzaToppings.extraSauce);
console.log(typeof papaJohns.numberOfStars);
console.log(typeof papaJohns.favorited);
console.log(typeof papaJohns.address);
console.log(typeof papaJohns.zipcode);
console.log(typeof papaJohns.acceptsReservations);

papaJohns.grabCategories = function (obj) {
  return console.log(Object.keys(papaJohns));
};

papaJohns.grabCategories(papaJohns);

const grabToppings = function (obj) {
  return console.log(Object.keys(papaJohns.pizzaToppings));
};

grabToppings(papaJohns.pizzaToppings);

const verifyValues = function (obj, num) {
  const values = Object.values(obj);
  const count = values.length;
  return count === num;
};

console.log(verifyValues(papaJohns, 3));
console.log(verifyValues(papaJohns, 10));

const getToppingsInfo = function (obj) {
  return Object.entries(papaJohns.pizzaToppings);
};

console.log(getToppingsInfo(papaJohns.pizzaToppings));

papaJohns.printAd = function (topping) {
  const price = this.pizzaToppings[topping];
  return console.log(
    `Welcome to Papa John's! We are located at 555 Main Street. This week, we are having a sale on ${topping} for ${price}. Better Ingredients. Better Pizza. Papa John's.`
  );
};

papaJohns.printAd("olives");
