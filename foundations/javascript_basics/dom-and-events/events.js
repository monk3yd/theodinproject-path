// onEvent property on DOM object in JS
// Method 2 issue: DOM element can only have 1 onclick property
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


// Attach event listeners to the nodes in JS
// Method 3: is much more flexible and powerful, though it is a bit more complex to set up
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World!");
});