 // this file will help us use those functionalities created in chatRoom.js


 //import event module
 const Chat = require("./chatRoom.js");

 //create an instance of the class Chat
 const chat = new Chat();


 chat.on("join", (user)=>{
    console.log(`${user} join the chat`);
 })

  chat.on("message", (user,message)=>{
    console.log(`${user} : ${message}`);
 })

  chat.on("leave", (user)=>{
    console.log(`${user} left the chat`);
 })


 //** */ simulating the chat ****

// this is create user/when user join the chat
 chat.join("Ben");
 chat.join("Hannah");

// when registered user send message
 chat.sendMessage("Ben", "Hello Hannah, how are you doing?");
 chat.sendMessage("Hannah","Hey Ben, I am good.");

// when user leave the chatroom
chat.leave("Ben") //this is remove Ben from the chat
chat.sendMessage("Ben", "This user can't be found") // Ben left the chat, so he not be found

chat.leave("Hannah") //this is remove Ben from the chat
chat.sendMessage("Hannah", "This user can't be found") // Hannah left the chat, so he not be found




