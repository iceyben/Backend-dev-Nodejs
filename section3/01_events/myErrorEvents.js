
/* 
    This will show how some people use events to handle errors in their code. 
    Example below
 */
    // import the events module
    const EventEmitter = require("node:events");

    // create a instance of the class EventEmitter
    const eventEmitter = new EventEmitter();

    // The create a listener 
    eventEmitter.on("error", (err)=>{
      console.error(`Error Occurred: ${err.message}`);
    })

    // Call the listener
    eventEmitter.emit("error", new Error("Something went wrong"));


    
    

