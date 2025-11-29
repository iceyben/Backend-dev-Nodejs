
// Import the events module for use

const EventEmitter = require("node:events");

// create an instance of the class EventEmitter
class Chat extends EventEmitter{
   sendMessage(msg){
    console.log(`Message sent: ${msg}`);
    this.emit("messageRecieved", msg);
   }

}

const chat = new Chat();
chat.on("messageRecieved", (msg) =>{
    console.log(`New Message: ${msg}`);
})

//trigger event 
chat.sendMessage("Hello Ben");