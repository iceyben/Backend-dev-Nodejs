
const http = require("node:http");
const PORT = 8000;

const server = http.createServer((req,res)=>{
      const method = req.method;
      const path = req.url;
     
      switch (method) {
            case "GET":
                  switch (path) {
                        case "/":
                              res.writeHead(200).end("Welcome Home");
                              break;

                        case "/contact-us":
                              res.writeHead(200).end("mulbahb997@gmail.com");
                              break;

                        case "/about":
                              res.writeHead(200).end("I am a Software Engineer");
                              break;
                        default:
                              res.writeHead(404).end("page not found");
                              break;
                  }
                  break;
            case "POST":
                  break;
      }     
})

server.listen(PORT, ()=>console.log(`Http server is running on: http://localhost:${PORT}`));
