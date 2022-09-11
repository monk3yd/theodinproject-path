const sumAll = function(n1, n2) {
    // Check for positive numbers
    // Check for non-number parameters
    if (n1 < 0 || n2 < 0 || typeof n1 != "number" || typeof n2 != "number") {
        return "ERROR";
    }

    // Assign for min and max
    let min;
    let max;

    if (n1 < n2) {
        min = n1;
        max = n2;
    } else {
        min = n2;
        max = n1;
    }

    // Init counter
    let counter = 0; 

    // Iterate through min - max range
    for (let i = min; i < max + 1; i++) {
        counter += i;
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;
