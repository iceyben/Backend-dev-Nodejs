
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;

//In memory database; 
const books = [    
     { id: 1, title: "Book One", author: "Author One"},
     { id: 2, title: "Book Two", author: "Author two"},
]

//Middleware plugin
app.use(express.json());

//Middleware to log endpoints requests
app.use((req,res,next)=>{
      const log = `\n[Date:${Date.now()}] : Method:${req.method} : Path: ${req.path})}`
      fs.appendFileSync("logs.txt", log, "utf-8");
      next()
})

//Routes 
app.get("/", (req,res)=>{
     return res.end("Welcome home");
})

app.get("/books", (req,res)=>{
     return res.json(books);
})

app.get("/books/:id", (req,res)=>{
      const id = parseInt(req.params.id);
      const book = books.find((e) =>e.id === id);
      
     if(!book){
            return res.status(404).json({error: `Book with the ID ${id} is not available`});
     }else{
            return res.json(book);
     }
});

app.post("/books", (req,res)=>{
      const {title, author} = req.body;

      //This is to validate title and make sure it is entered
      if(!title || title === ""){
            return res.status(400).json({error: `Title is required`})
      }

       //This is to validate author and make sure the field is entered
      if(!author || author === ""){
            return res.status(400).json({error: `Author is required`});
      }

      //Now you have to create a new book object
      const id = books.length + 1;
      const book = {id, title, author}
      books.push(book);

      return res.status(201).json({message: `Book for created successfully! id:${id}`});
})

app.patch("/books/:id", (req, res)=>{
      const id =parseInt(req.params.id);

      if(isNaN(id)){
            return res.status(404).json({error: `id must me a number`});
      }
      const book = books.find((b) => b.id === id);

      if(!book){
            return res.status(404).json({error: `Book with ID: ${id} not found`});
      }

      // Update the book details now
      if(req.body.title){
            book.title = req.body.title;
      }
      if(req.body.author){
            book.author = req.body.author;
      }

      return res.json({message: `Book was updated successfully`, data : book});

})

app.delete("/books/:id", (req,res)=>{
      const id = parseInt(req.params.id);
      
      if(isNaN(id)){
            return res.status(404).json({error: `id must be a number`});
            
      }
      const book = books.find((i)=> i.id === id)

      if(!book || book === -1){
            return res.status(404).json({error: `Book with ID of ${id} not found`});
      }

      //Delete the book 
      books.splice(book, 1);

      return res.status(200).json({message: `Book was deleted successfully!`});
})

app.listen(PORT,()=>{
      console.log(`Server is running on localhost:${PORT}`);
})