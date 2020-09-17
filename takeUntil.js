// TESTER FUNCTIONS

const eqArrays = function(array1, array2) {
  let arrayStringOne = array1.toString();
  let arrayStringTwo = array2.toString();
  if (arrayStringOne === arrayStringTwo) {
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

// SOLUTION

const takeUntil = function(array, callback) {
  newArr = [];
  for (const item of array) { //loop throgh the array
    if (callback(item)) { //check if the callback returns true when the array item is passed into it
      break //if yes stop
    } else {
      newArr.push(item) //if no push the item into a new array
    }
  }
  return newArr; //return the array
};

//TEST CASES

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood']);

