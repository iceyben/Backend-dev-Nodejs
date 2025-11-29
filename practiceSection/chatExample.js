
// I will use class to build a chatapp : first create the class

/* 
    We need the following: 
    - Users
    - Message
    - Chat/Room
 */

class User{
   constructor(username){
    this.username = username ;
   }

//    // Time message was sent
//    currentTime = function(){
//     console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
//    }

   

   //create a method for sending message
   sendMessage = function(msg){
     console.log(`${this.username}: ${msg} }`);
   }


}

// create a new user to send message

let ben = new User("ben");
let hannah = new User("hannah");

// we need to send message by call the method sendMessage and assign a params
ben.sendMessage("Hello hannah");
hannah.sendMessage("Hey Ben, how are you?");