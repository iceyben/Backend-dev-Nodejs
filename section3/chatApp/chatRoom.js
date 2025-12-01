// This is where we will have all our functionality at

//Step 1: import the event module

const EventEmitter = require("events");

//Step 2: create our chatApp template to be reused

 class ChatRoom extends EventEmitter{
    constructor(){
       super()

       //Now 0ur new set is users
       this.users = new Set();

    }
     //join user by adding it to users set of object
    join(user){
        this.users.add(user);
        this.emit("join", user)
    }

    //Create a send message function
    sendMessage(user, message){
        if(this.users.has(user)){
            this.emit("message", user, message )
        }else{
            console.log(`${user} is not in chat`);
        }
    }

    leave(user){
        if(this.user.has(user)){
            this.users.delete(user);
            this.emit("leave", user)
        }else{
             console.log(`${user} is not in the chat`)
        }
    }


}

module.exports = ChatRoom;





