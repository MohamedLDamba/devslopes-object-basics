/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const flames = {
  name: "flames",
  cuisines: ["pattie", "rice", "goat"],
  numberOfStars: 5,
  favorited: true,
};

console.log(flames);

flames.address = "55 humble ave";
flames.zipcode = 21277;
flames.acceptsReservations = true;

console.log(flames);

flames.numberOfStars += 1;
flames.favorited = !flames.favorited;
flames.cuisines.push("italian");

console.log(flames);

const retrieveProperty = function (obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
};

console.log(retrieveProperty(flames, "name"));
