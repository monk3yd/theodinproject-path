const sumAll = function(min, max) {
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
