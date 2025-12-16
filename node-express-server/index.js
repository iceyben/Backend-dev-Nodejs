
const express = require("express");
const app = express();
const PORT = 8000;

//In memory database; 
const books = [    
     { id: 1, title: "Book One", author: "Author One"},
     { id: 2, title: "Book Two", author: "Author two"},
]

//Middleware plugin
app.use(express.json());

//Routes 
app.get("/books", (req,res)=>{
     return res.json(books);
})

app.get("/books/:id", (req,res)=>{
      const id = req.params.id;
      const book = books.find((e) =>e.id == id);
      
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

app.listen(PORT,()=>{
      console.log(`Server is running on localhost:${PORT}`);
})