// JavaScript source code

//1
function show() {
    console.log('coucou');
}
setInterval(show, 1000);

//2
setinterval(function () {
    console.log('coucou anonyme');
}, 1000);

//3
setInterval(() => {

    console.log('coucouarrow function ES6');
}, 1000);