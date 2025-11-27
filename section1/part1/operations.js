//Addition of two numbers
// To carry a line of code, up and down using the arrow: Put cursor at the line and press Alt + up and down arrow

let addition = 4 + 5;

let score = 102;
let bonus = 25;

let totalScore = score + bonus;

// subtraction 
let subtract =9 - 3;

// multiplication
let mult = 3 * 5;

// division
let divi = 8 / 2;

//Reminder
let reminder = 9 % 2;

//exponentiation
// Example: let say we wat to calculate 2 to the power of 3
let expo =  2 ** 3;


// Increment and Decrement
//Example of incrementing by 1  

let myScore = 110;
myScore++; // This is equivalent to myScore = myScore + 1

//Example of decrementing by 1
let yourScore = 100;
yourScore--; // This is equivalent to yourScore = yourScore - 1


//Comparison Operators
let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num2); //Equal to 
console.log(num1 != num3); //True if not equal
console.log(num1 > num3); //Greater than
console.log(num1 < num3); //Less than
console.log(num1 >= num2); //True if greater than or equal to
console.log(num3 <= num2); //True if less than or equal to



//&& (AND) operator : You can use it to combine multiple conditions

// || (OR) operator: You can use it to check if at least one condition is true

// ! (NOT) operator: You can use it to negate a condition


//Example of using AND, OR and NOT operators
//Sinario: You are building an application which requires users to be logged in and have a valid credit card to purchase anything. For this we will use two boolean variables isLoggedIn and  isPaid.


let isLoggedIn = true;
let isPaid = false;

console.log("////////////////////");

//1. Using AND operator: you should be logged in and you should be a paid user to make a purchase
console.log(isLoggedIn && isPaid); //false because isPaid is false

//2. Using OR operator: you can make a purchase if you are logged in or if you are a paid user
console.log(isLoggedIn || isPaid); //true because isLoggedIn is true

//3. Using NOT operator: You cannot make a purchase if you are not logged in
console.log(!isLoggedIn); //false because isLoggedIn is true


console.log("////////////////////");

//Assignment operators
let points = 10 + 11 ; //21
let num1s = 10; //10
num1s += 5; // num1s = num1s + 5 => 15
console.log(num1s);


console.log("////////////////////");

