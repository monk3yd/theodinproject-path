https://javascript.info/ifelse#rewrite-if-else-into
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

https://javascript.info/ifelse#rewrite-if-into
let results = (a + b < 4) ? "Below" : "Over";

https://javascript.info/ifelse#the-name-of-javascript
let answer = prompt("What is the official name of JavaScript?")

if (answer === "ECMAScript") {
    console.log("Right!");
} else {
    console.log("You don't know? ECMAScript!");
}

https://javascript.info/ifelse#show-the-sign
let num = Number(prompt("Choose a number: ", ""));

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert (-1);
} else {
    alert(0);
}

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#active_learning_a_simple_calendar

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
    const choice = select.value;

    // TODO
    let days;
    if (choice === 'January' || choice === 'March' || choice === 'May' || choice ==='July' || choice === 'August' || choice === 'October' || choice === 'December') {
        days = 31; 
    } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
        days = 30;
    } else {
        days = 28;
    }

    createCalendar(days, choice);
});

function createCalendar(days,choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, 'January');

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#active_learning_more_color_choices
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
  switch (choice) {
    case 'white':
        update('black', 'white');
        break;
    case 'black':
        update('white', 'black');
        break;
    case 'purple':
        update('purple', 'white');
        break;
    case 'yellow':
        update('yellow', 'darkgray');
        break;
    case 'psychedelic':
        update('lime', 'purple');
        break;
  }
});

// white, black, purple, yellow, psychedelic
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}