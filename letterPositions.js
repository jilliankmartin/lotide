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


const letterPositions = function(sentence) {
  const results = {};
  for (const letter in sentence) {
    if (sentence[letter] !== " ") {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(parseInt(letter));
      } else {
        results[sentence[letter]] = [parseInt(letter)];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").l, [2, 3]);