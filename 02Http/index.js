
const http = require("node:http");
const PORT = 8000;

const server = http.createServer((req,res)=>{
      console.log(`Incoming request at [${Date.now()}]`);
      console.log(req.headers)
      

      res.writeHead(200);
      res.end(`Hey, you can accept ${req.headers["accept-language"]}`)
});

server.listen(PORT, ()=>console.log(`Server is running on 8000 `));