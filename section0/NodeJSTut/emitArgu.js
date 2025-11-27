const EventEmitter= require("events");
const myEmitter = new EventEmitter();

// Listener function - greetBirthday
const greetBirthday = ( name , newAge)=>{
    console.log(`Happy Birthday, ${name}! You are now ${newAge} years old.`);
}

// Listening for 'birthdayEvent
myEmitter.on("birthdayEvent", greetBirthday);

// Emitting the birthdayEvent with arguments

myEmitter.emit( "birthdayEvent", "Alice", 30);