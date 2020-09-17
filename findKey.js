// TESTER FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//SOLUTION
const findKey = function(object, callback) {
  for (const item in object) { //iterate over each item in the outer object
    if (callback(object[item])) {  //if the callback function returns true when called, return the key of the first object and exit the loop
      return item;
    }
  }   //if no match is found return undefined
};

//TEST CASES
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// assertEqual(
//   findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 5)
//   , undefined);