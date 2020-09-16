const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let arrayStringOne = array1.toString();
  let arrayStringTwo = array2.toString();
  if (arrayStringOne === arrayStringTwo) {
    return true;
  }
};

const eqObjects = function(object1, object2) {
  let obj1Key = Object.keys(object1);
  let obj2Key = Object.keys(object2);
  if (obj1Key.length !== obj2Key.length) {
    return false;
  } else {
    for (let item of obj1Key) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item]) && eqArrays(object1[item], object2[item])) {
        return true;
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    }
    return true;
  }
};

// const eqObjects = function(object1, object2) {
//   let obj1Key = Object.keys(object1);
//   let obj2Key = Object.keys(object2);
//   if (obj1Key.length !== obj2Key.length) {
//     return false;
//   } else {
//     for (let item of obj1Key) {
//       if (object1[item] !== object2[item]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, ab), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false