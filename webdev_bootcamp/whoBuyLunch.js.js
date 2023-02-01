function whosPaying(names) {
    let randomIndex = Math.floor(Math.random() * names.length);
    let chosenName = names[randomIndex];
    return `${chosenName} is going to buy lunch today!`
}