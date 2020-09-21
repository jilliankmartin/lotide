

//determine whether the array has an odd number of elements or an even number
const isItEven = function(myArray) {
  if (myArray.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};


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

module.exports = findMiddle;



