/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {


  let arrValues = [];
  for (let key in obj) {
    //console.log(key);
    arrValues.push(obj[key]);
  }
  return arrValues;

  /*
  const values = Object.values(obj);
  return values;
  */

}
let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
