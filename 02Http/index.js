
const http = require("node:http");
const fs = require("node:fs");
const PORT = 8000;

const server = http.createServer((req,res)=>{
      const method = req.method;
      const path = req.url;

      const log = `\n[${Date.now()}] : ${method} ${path}`;
      fs.appendFileSync("log.txt", log, "utf-8");

      switch (method) {
            case "GET":

                {  switch (path) {
                        case "/":
                              return res.writeHead(200).end("Home Page");
                        
                        case "/about-me":
                              return res.writeHead(200).end("About Page");

                        case "/contact-me":
                              return res.writeHead(200).end("Contact Page");
                  
                        default:
                              return res.writeHead(404).end("Sorry, route not found");
                        }
                  }
                  
            case "POST":
                  switch (path) {
                        case "/tweet":
                              return res.writeHead(201).end("Tweet created successfully");

                        default:
                             return res.writeHead(404).end("Page not found");
                  }
            default:
                  return res.writeHead(404).end("Sorry, wrong method");
      }
})


server.listen(PORT,()=>{console.log("Server running on localhost:8000")});