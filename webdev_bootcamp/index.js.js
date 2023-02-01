function getMilk(money) {
    let bottlePrice = 1.5;
    let numOfBottles = money / bottlePrice;
    console.log(Math.floor(numOfBottles))
}

getMilk(10);