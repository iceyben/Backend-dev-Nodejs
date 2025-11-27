// Non Primitive Data Types
// 1. Objects
// 2. Arrays
// 3. Functions
// 4. Dates
// 5. etc

// Object: collection of properties
let username = {
    firstname: "Ben",
    isLoggedIn: true,
}

const myFirstName =  
console.log(username);
console.log(typeof username); // object

let today = new Date();
console.log(today.getFullYear()); // current year


//Arrays: collection of items in a single variable

let heros = ["spiderman", "ironman", "thor", 123, true];

let anotherUser = ["bruce", true];

console.log(anotherUser[0]);

//Type convertion 
let isValue = true;
console.log(isValue + 1); // 2 : boolean true is converted to 1

let isValue2 = false;
console.log(isValue2 + 1); // 1 : boolean false is converted to 0
