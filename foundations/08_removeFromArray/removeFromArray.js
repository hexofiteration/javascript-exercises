const removeFromArray = function(inputArr, ...inputN) {
  return inputArr.filter(item => !inputN.some(n => n === item));
};
// Do not edit below this line
module.exports = removeFromArray;
