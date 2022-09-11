const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    strings = [];
    for (let i = 0; i < num; i++) {
        strings.push(str);
    }
    return strings.join("")
};

// Do not edit below this line
module.exports = repeatString;
