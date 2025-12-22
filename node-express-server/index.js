
const express = require("express");


const bookRouter = require("./routes/book.routes")
const logger = require("./middlewares/logger.middleware");
const app = express();
const PORT = 8000;

//Middleware plugin
app.use(express.json());
app.use(logger.loggerMiddleware)

//Routes 
app.get("/", (req,res)=>{
     return res.end("Welcome home");
})


//Use the bookRouter here
app.use("/books", bookRouter);

//Listen to our endpoint
app.listen(PORT,()=>{
      console.log(`Server is running on localhost:${PORT}`);
})