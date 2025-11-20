
// Number

let balance = 120;
console.log(typeof balance); // number

let anotherBalance = new Number(120);
console.log(typeof anotherBalance); // object


//Everything in javascript is object except primitive data types. Everything that is non-primitive can also be converted into advanced data types or the object types.

//The variable exist but the value is not defined: this is called undefined

let names = "Ben";
let age = 25;
let greeting = "how are you doing today?";

console.log(`Hello, ${names}, ${greeting}  You are now ${age + 1} years old`); // Using template literals

console.log(names + " Hello"+ greeting)



// Symbol: unique and immutable data type
let sym1 = Symbol("hello");
let sym2 = Symbol("hello");
console.log(sym1 === sym2); // false