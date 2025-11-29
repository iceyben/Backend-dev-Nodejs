// step 1: import the events global variable
const EventEmitter = require("node:events");

// step 2: Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

//Step 3: Rigister an event listiner 
const greetListener = (username)=>{
     console.log(`Hello ${username} and welcome to events in node`);
}
eventEmitter.on("greet", greetListener);
eventEmitter.emit("greet", "benmulbah");

// This even is invoke on only once when it is called
const notifyListener = (username)=>{
    console.log(`Hey ${username}, this message will only push once`);
}
eventEmitter.once("pushNotify", notifyListener );

eventEmitter.emit("pushNotify", "mulbahb997");

// listeners() : tells how many listeners an action have

console.log(eventEmitter.listeners("greet"));
console.log(eventEmitter.listenerCount("greet"));