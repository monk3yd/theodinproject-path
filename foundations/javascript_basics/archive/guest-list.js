https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += `${people[i]}, `;
    } else {
        admitted.textContent += `${people[i]}, `;
    }
}
admitted.textContent = admitted.textContent.slice(0, -2) + '.';
refused.textContent = refused.textContent.slice(0, -2) + '.';