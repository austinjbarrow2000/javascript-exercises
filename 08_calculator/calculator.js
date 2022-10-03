const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	const totalYears = a.reduce((total, num) => {
    return total + num;
  }, 0 )

  return totalYears;
};

const multiply = function(a, b) {
  const result = a.reduce((total, num) => {
    return total * num;
  }, 1 )

  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  result = 1;
	for( let i = 1; i <= a; i++ ) {
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
