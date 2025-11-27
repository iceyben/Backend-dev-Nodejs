
// Task 1: Read the contents of notes.txt

const fs = require("node:fs");
const path = "note.txt";
const encodingChar = "utf-8";

console.log("**START OF SCRIPT**");

//[sync] => Blocking Operations Example
/* const content = fs.readFileSync(path, encodingChar);
console.log(`Content found: ${content}`); */

//[Async] => Non-Blocking Operations Example
fs.readFile(path, encodingChar, function(err,data){
    if(err){
        console.log(`Error found: ${err}`);
        
    }else{
        console.log(`Found the result: ${data}`);
        
    }
})

console.log("**END OF SCRIPT**");
