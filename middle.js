//TESTER FUNCTIONS

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

//SOLUTION

//determine whether the array has an odd number of elements or an even number
const isItEven = function(myArray) {
  if (myArray.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//receive some input (array)
//return the middle array element

const findMiddle = function(myArray) {
  let arrMiddle = [];
  if (myArray.length <= 2) {
    return arrMiddle;
  }
  if (isItEven(myArray)) {
    arrMiddle.push(myArray[Math.floor(myArray.length / 2 - 1)]);
    arrMiddle.push(myArray[(Math.floor(myArray.length / 2 - 1)) + 1]);
  } else {
    arrMiddle.push(myArray[Math.floor(myArray.length / 2)]);
  }
  return arrMiddle;
};

assertArraysEqual([findMiddle([1,2,3])], [2]);



