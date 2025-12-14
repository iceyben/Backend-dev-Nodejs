
const http = require("node:http");
const PORT = 8000;

const server = http.createServer((req,res)=>{
      console.log(`Incoming request....`);
      const method = req.method;
      const path = req.url;
     
      switch (method) {
            case "GET":
                  switch (path) {
                        case "/":
                              res.writeHead(200).end("<h1>Home Page</h1>");   
                              break;

                        case "/about-me":
                              res.writeHead(200).end("<h1>About Page</h1>");
                              break;

                        case "/contact":
                              res.writeHead(200).end("<h1>Contact Page</h1>");
                              break;
                  
                        default:
                              res.writeHead(404).end("<h1>Sorry Page Not Found!</h1>")
                              break;
                  }
            break;

            case "POST":
                  switch(path){
                        case "/tweet":
                              try {
                                    
                              } catch (error) {
                                    
                              }
                  }
      
            default:
                  res.writeHead(404);
                  res.end("Sorry wrong request");
                  break;
      }


})

server.listen(PORT, ()=>console.log(`Http server is running on: http://localhost:${PORT}`));
