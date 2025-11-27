
const fs = require("node:fs");

/* const content = fs.readFileSync('note.txt', 'utf-8');
console.log(content); */

/* const createFile = fs.writeFileSync('copy.txt', 'I want to write this', 'utf-8'); */

//This to only create games folder
// fs.mkdirSync("games");

// Now lets create multiple folders in games folder

/* fs.mkdirSync("games/xyz/a", {recursive: true}); */

fs.unlinkSync("copy.txt");


