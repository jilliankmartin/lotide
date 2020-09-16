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

//retriece the array to be snipped and the item we want to snip
//parcel out and remove the items we want to snip
//return the new array without the snipped items

const without = function(source, itemsToRemove) {
  let newArr = (source.filter(sources => !itemsToRemove.includes(sources)));
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);