// With function
function isEqual(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

let answer = prompt("Who's there?");

if (isEqual(answer, "Admin")) {
    let passwd = prompt("Password?");

    if (isEqual(passwd, "TheMaster")) {
        alert("Welcome!")
    } else if (isEqual(passwd, "") || isEqual(passwd, null)) {
        alert("Canceled");
    } else {
        alert("Wrong password.");
    }
} else if ((isEqual(answer, "")) || isEqual(answer, null)) {
    alert("Canceled");
} else {
    alert("I don't know you");
}

// Without function
let answer = prompt("Who's there?");

if (answer === "Admin") {

    let passwd = prompt("Password?");

    if (passwd === "TheMaster") {
        alert("Welcome!");
    } else if (passwd === "" || passwd === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (answer === "" || answer === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}

// Example
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}