const add = (n1, n2) => n1 + n2;

const subtract = (n1, n2) => n1 - n2;

const sum = arr => arr.reduce((x, y) => x + y, 0);

const multiply = arr => arr.reduce((x, y) => x * y, 1);

const power = (n1, n2) => n1 ** n2;

const factorial = function(n) {
    if (n === 0) {
        return 1;
    } else {
        // Add all decresing numbers into array
        let fact = [];
        while (n > 0) {
            fact.push(n);
            n--;
        }
        factArray = [...fact];

        // Multiply all items in array
        return factArray.reduce((a, b) => a * b, 1);
    }
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
