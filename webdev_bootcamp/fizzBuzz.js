let output = [];
let counter = 1;

function fizzBuzz() {
    if (counter % 3 === 0 && counter % 5 === 0) {
        output.push("FizzBuzz");
        
    } else if (counter % 3 === 0) {
        output.push("Fizz");
        
    } else if (counter % 5 === 0) {
        output.push("Buzz");
        
    } else {
        output.push(counter);
    }
    
    console.log(output);
    counter++;
}