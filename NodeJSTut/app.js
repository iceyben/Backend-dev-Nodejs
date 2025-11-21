
// Modules
// console.log("////////////////////");

// const sayHello = require("./hello.js");
// sayHello("Ben");
// sayHello("Steven");
// sayHello("Alvin");

// const myModule = require("./myModule.js");
// console.log(myModule.foo);
// myModule.myFunction();
// myModule.myFunction2();
// myModule.myFunction3();

// const os = require("os");
// const systemUptime = os.uptime();
// const userInfo = os.userInfo();
// const otherInfo = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(`The systemUptime: ${systemUptime} seconds`);
// console.log(`User Info: ${JSON.stringify(userInfo)}`);
// console.log(`Other Info: ${JSON.stringify(otherInfo)}`);


// console.log("///////// Path Module /////////");

// const path = require("path");
// const myPath = "\Desktop\Backend-dev-Nodejs\NodeJSTut\app.js ";

// const pathInfo = {
//     fileName: path.basename(myPath),
//     folderName: path.dirname(myPath),
//     fileExtension: path.extname(myPath),
//     absoluteOrNot: path.isAbsolute(myPath),
//     detailInfo: path.parse(myPath),
// }

// console.log(pathInfo);
// console.log(`Path Separator: ${path.sep}`);

// console.log("////////// Joining Paths /////////");
// console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'));


// console.log("////////// Path Resolve /////////");
// console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'))


// console.log("///////// FS Module /////////");

// const fs = require("fs");

// fs.mkdir("./myFolder", (err)=>{
//     if(err){
//         console.log(`Error creating folder: ${err}`);
//     }else{
//         console.log("Folder created successfully");
//     }
// })


// console.log("///////// fs.WriteFile Module/////////");

// const data = "Hey, this is newFile.txt ";

// fs.writeFile("./myFolder/newFile.txt", data,{flag: 'a'},  (err)=>{
//     if(err){
//         console.log(`Error writing file: ${err}`);
//         return;
//     }else{
//         console.log("File written successfully");
//     }
// })


// console.log("///////// fs.ReadFile Module/////////");
// fs.readFile("./myFolder/newFile.txt", {encoding: "utf8"}, (err, data)=>{
//     if(err){
//         console.log(`Error reading file: ${err}`);
//         return;
//     }else{
    
//         console.log(`File data: ${data}`);
//     }
// })

const fs = require("fs");
console.log("///////// Synchronous File Read and Write /////////");

try {
    //Write to file Synchronously
    fs.writeFileSync("./myFolder/myFileSync.txt", "myFileSync says Hi there!");
    console.log("Write operation successful");

    //Read from file Synchronously
    const fileData = fs.readFileSync("./myFolder/myFileSync.txt", {encoding: "utf8"});
    console.log( "Read operation successful. Here is the data: ");
    console.log(fileData)
} catch (error) {
    console.log( "Error occurred!");
    console.log(err);
}