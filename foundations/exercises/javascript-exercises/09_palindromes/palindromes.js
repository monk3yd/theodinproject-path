const palindromes = function (string) {
    // strip string from all symbols, spaces and punctuation
    let filteredString = string.replace(/!|\.|\s|,|/g, "").toLowerCase();

    // reverse string
    let reverseString = [...filteredString].reverse().join('').toLowerCase();

    // compare original string to reverse string
    if (filteredString === reverseString) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
