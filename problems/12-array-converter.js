/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  let newObj = {};
  let key;
  let counter = 1;
  //console.log(newObj);
  for (let i in array) {
    //console.log(array[i]);
    key = array[i];
    //console.log(newObj[key] === undefined);
    if (newObj[key] === undefined) {
      newObj[key] = counter;
    } else {
      counter++;
      newObj[key] = counter;
    }
  }
  return newObj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
