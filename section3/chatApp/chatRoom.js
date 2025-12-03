// This is where we will have all our functionality at

//Step 1: import the event module

const EventEmitter = require("events");

//Step 2: create our chatApp template to be reused

 class ChatRoom extends EventEmitter{
    constructor(){
        // This referenced the EventEmitter
        super()
        this.users = new Set()
    }

    // when user join
    join(user){
       this.users.add(user);
      this.emit("join", user)
    }

    // users should send message if they are part of the users. Example
    sendMessage(user,message){
        if(this.users.has(user)){
            this.emit(('message',user,message))
        }else{
            console.log(`${user} was not found in chat`)
        }
    }

    //functionality for leaving the chat room: if a user leave 
    leave(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit("leave",user)
        }else{
            console.log(`${user} was not found in the chat`)
        }
    }
 }


 // we need to export ChatApp class so we can use it inside index.js

 module.exports = ChatRoom;