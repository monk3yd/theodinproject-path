const fibonacci = function(n) {
    n = Number(n)

    let fibSequence = [1, 1];

    if (n === 1 || n === 2) {
        return fibSequence[n - 1];
    } else if (n < 1) {
        return "OOPS";
    }

    for (let i = 2; i < n; i++) {
        let lastNum = fibSequence[i - 1];
        let beforeLastNum = fibSequence[i - 2];
        fibSequence.push(lastNum + beforeLastNum);
    }
    // console.log(fibSequence);
    return fibSequence[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
