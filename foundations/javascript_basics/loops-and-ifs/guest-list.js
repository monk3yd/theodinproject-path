// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// for ... of loop
// for (const person of people) {
//     if (person === 'Phil' || person === 'Lola') {
//        refused.textContent += `${person}, `; 
//     } else {
//         admitted.textContent += `${person}, `
//     }
// }

// for loop
// for (let i = 0; i < people.length; i++) {
//     if (people[i] === 'Phil' || people[i] === 'Lola') {
//         refused.textContent += `${people[i]}, `;
//     } else {
//         admitted.textContent += `${people[i]}, `;
//     }
// }

// while loop
i = 0;
while (i < people.length) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
       refused.textContent += `${people[i]}, `;
    } else {
       admitted.textContent += `${people[i]}, `;
    }
    i++;
}

// do while loop

admitted.textContent = admitted.textContent.slice(0, -2) + '.';
refused.textContent = refused.textContent.slice(0, -2) + '.';
