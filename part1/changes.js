let gameName = "spiderman";
console.log("Game Name is "+ gameName);
gameName = "avengers";

console.log("Game Name is now ", gameName);

// You cannot do this with let
// let gameName = "batman"; // This will give error because gameName is already declared with let


const username = "benmulbah";
//const username = "john"; // This will give error because username is already declared with const
console.log("Username is ", username);
// You cannot re-assign a const variable
// username = "john"; // This will give error because username is a const variable

// However, if the const variable is an object, you can change its properties
const userDetails = {firstname: "Ben", lastname: "Mulbah"};
console.log("User Details: ", userDetails);
userDetails.firstname = "John";
 
