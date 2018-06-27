// JavaScript source code
const text = "fezf1548ffdsaf515154v54654"
let regex = RegExp("[a-z]+", "g");
let tab = text.match(regex);

for (var i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}
//2
console.log(text.match(/[a-z]+/gmi));