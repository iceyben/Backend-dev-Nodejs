
const http = require("node:http");
const server = http.createServer((req,res)=>{
    console.log("I got an incoming request");
    res.writeHead(200);
    res.end("<h1>This is an example server running</h1>");
});

const PORT = 8000;

server.listen(PORT, ()=>{
    console.log("Server is running on port 8000")
})