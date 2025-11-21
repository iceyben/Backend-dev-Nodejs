// How to use module.exports to export functions form a module in Node.js

function myFunction(){
    console.log("This is my function");
}

function myFunction2(){
    console.log("This is my second function");
}

function myFunction3(){
    console.log("This is my third function");
}

module.exports= {
    foo: "bar",
    myFunction: myFunction, 
    myFunction2: myFunction2,
    myFunction3: myFunction3,
}

