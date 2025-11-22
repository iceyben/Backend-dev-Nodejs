
//Checking if a number is greater than another number:
/*
let num1 = 35;
let num2 = 20;

if(num1 > num2){
    console.log(`${num1} is greater then ${num2}.`);
}else{
    console.log(`${num2} is greater then ${num1} .`);
}
*/

//Check if a string is equal to another string: 

let username = "benmulbah";
let anotherUsername = "benmulbah"

if(username == anotherUsername){
    console.log("Pick another username");
}else{
    console.log("You can pick this username");
    
}

// Checking if a variable is a number or not:

let score = 44;
if(typeof score === "number"){
    console.log(`Yep, ${score} is a number`)
}else{
    console.log("Sorry, this is not a number");
}