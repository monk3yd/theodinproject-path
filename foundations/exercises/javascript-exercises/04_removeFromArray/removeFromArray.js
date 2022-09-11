const removeFromArray = function(arr, ...args) {
    for (let j = 0; j < args.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === args[j]) {
                arr.splice(i, 1); 
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
