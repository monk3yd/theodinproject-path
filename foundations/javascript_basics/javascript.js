// Fundamentals Part 1: Variables & Numbers
console.log(23 + 97);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a)

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

// Fundamentals Part 2: Strings & Conditionals
let user = prompt("User:");

if (user === "" || user === null) {
    console.log("Canceled");

} else if (user === "Admin") {
    let passwd = prompt("Password:")

    if (passwd === "TheMaster") {
        console.log("Welcome");

    } else if (passwd === "" || passwd === null) {
        console.log("Canceled");

    } else {
        console.log("Wrong password");
    }

} else {
    console.log("I don't know you");

}