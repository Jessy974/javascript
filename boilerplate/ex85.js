// JavaScript source code
let number = { random: "1" };
number.random = function () {
    return Math.round(Math.random() * 100);
}

//console.log(Math.random(number*100));


console.log(number.random());