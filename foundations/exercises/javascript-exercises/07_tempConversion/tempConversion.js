const ftoc = function(fahr) {
    let celsius = (fahr - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10;
};

const ctof = function(celsius) {
    let fahr = (celsius * 9 / 5) + 32;
    return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
