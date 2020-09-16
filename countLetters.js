//TESTER
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Count the letters in the string and push them to an object
//Don't count spaces
const countLetters = function(sentence) {
  const myCount = {};
  for (const item of sentence) {
    if (item !== " ") {
      if (myCount[item]) {
        myCount[item] += 1;
      } else {
        myCount[item] = 1;
      }
    }
  }
  return myCount;
};

//check

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["r"], undefined);
assertEqual(result1["h"], 4);
assertEqual(result1["i"], 2);