// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
while (i >= 0)
{
    // creates new paragraph
    const para = document.createElement('p');

    if (i === 10) {
        // populate paragraph
        para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
        para.textContent = 'Blast off!';
    } else {
        para.textContent = `${i}`;
    }

    // appends paragraph to output div
    output.appendChild(para);
    i--;
}
