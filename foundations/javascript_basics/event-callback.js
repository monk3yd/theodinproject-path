// Using named functions can clean up your code considerably,
// and is a really good idea if the function is something that you are going
// to want to do in multiple places.
function alertFunction () {
    alert("YAY! YOU DID IT!");
}


// Method 2
// btn.onclick = alertFunction;

const btn = document.querySelector(".btn");

// Method 3
btn.addEventListener('click', function (e) {
    console.log(e.target);
});