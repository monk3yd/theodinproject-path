// onEvent property on DOM object in JS
// issue: DOM element can only have 1 onclick property
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


// Attach event listeners to the nodes in JS
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World!");
});