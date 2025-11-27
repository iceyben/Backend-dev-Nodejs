// __dirname Global variable
console.log(`Directory: ${__dirname}`);

//__filename Global variable
console.log(`File: ${__filename}`);

console.log("Create your own global variable");

globalThis.myVariable = "Hello world from global variable";
console.log(myVariable);
