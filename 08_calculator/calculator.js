const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(inputArray) {
    let sum = 0;
    inputArray.forEach(num => {
        sum += num;
    });
    return sum;
};

const multiply = function(inputArray) {
    let product = 1;
    inputArray.forEach(num => {
        product = product * num;
    });
    return product;
};

const power = function(x, y) {
	let numToPower = Math.pow(x, y);
    return numToPower;
};

const factorial = function(inputNum) {
    if (inputNum === 0) {
        return 1;
    }

	let numFactorialed = inputNum;
    for (let i = 1; i < inputNum; i++) {
        numFactorialed = numFactorialed * (inputNum - i);
    }
    return numFactorialed;
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
