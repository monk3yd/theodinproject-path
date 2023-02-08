function loveCalculator(nameOne, nameTwo) {
    let n = Math.random();
    return Math.floor(n * 100) + 1;
}

let response = loveCalculator("Juan", "Belen");
console.log(response);