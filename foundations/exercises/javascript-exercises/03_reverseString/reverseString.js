const reverseString = function(string) {
    i = 0;
    reverse = [];
    while (string.length > i) {
        reverse.unshift(string[i]);
        i++;
    }
    return reverse.join("")
};

// Do not edit below this line
module.exports = reverseString;
