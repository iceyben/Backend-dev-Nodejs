const EventEmitter= require("events");
const myEmitter = new EventEmitter();

// Listener function 1 - sayHello
const sayHello = ()=>{
    console.log("Hello User");
}


// Listener function 1 - sayHi
const sayHi = ()=>{
    console.log("Hi User");
}

// Listener function 3 - greetNewYear
const greetNewYear = ()=>{
   console.log("Happy New Year!");
}


// Subscribing to 'userJoined' event 
myEmitter.on("userJoined", sayHello);
myEmitter.on("userJoined", sayHi);
myEmitter.on( "userJoined", greetNewYear);

// Emitting the 'userJoined' event
myEmitter.emit("userJoined");
