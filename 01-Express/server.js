const express = require("express");
const fs = require("node:fs");
const port = 5001;
const app = express();


app.use((req,res,next)=>{
      const method = req.method;
      const path = req.url;

      const log = `\nRequest:[${Date.now()}] : ${method} ${path}`;
      fs.appendFileSync("log.txt", log, "utf-8");
      next();
})

console.log("Waiting incoming request....");

app.get("/",(req,res)=>{
      res.end("Home Page");
})

app.get("/about", (req,res)=>{
      res.end("About Me");
})

app.get("/contact", (req,res)=>{
      res.end("Contact Me");
})

app.get("/tweet", (req,res)=>{
      res.end("List of Tweets");
})

app.post("/tweet",(req,res)=>{
      res.status(201).json("Tweet created successfully!");
})


app.listen(port, ()=>{
      console.log(`Server is runing on localhost:8000`);
})