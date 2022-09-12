// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I\'m red!';

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m a blue h3!';

const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background-color: pink;';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
div.appendChild(h1);

const subpara = document.createElement('p');
subpara.textContent = 'ME TOO!';
div.appendChild(subpara);

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);