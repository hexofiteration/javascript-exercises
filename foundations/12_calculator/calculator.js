const add = function(num1, num2) {
	 return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((acc, el) => acc += el, 0);
};

const multiply = function(array) {
  return array.reduce((acc, el) => acc *= el);
};

const power = function(base, exponent) {
  let result = 1;
	for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result; 
};

const factorial = function(n) {
  let result = 1;
	for (let i = 1; i <= n; i++) {
    result *= i;
    
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
