// JavaScript source code
let hello = "Hello";
let world = "World"; 

hello = hello.toString("Hello");
world = world.toString("World");

console.log(hello + ' ' + world);
console.log('%s %s', hello, world);
//ES6
console.log(`${hello} ${world}`);