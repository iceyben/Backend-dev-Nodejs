const express = require("express");
const router = express.Router();

const Books = require("../models/books")


router.get("/", (req,res)=>{
     return res.json(Books);
})

router.get("/:id", (req,res)=>{
      const id = parseInt(req.params.id);
      const index = Books.find((e) =>e.id === id); 
      
     if(!index){
            return res.status(404).json({error: `Book with the ID ${id} is not available`});
     }else{
            return res.json(index);
     }
});

router.post("/", (req,res)=>{
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
      const id = Books.length + 1;
      const book = {id, title, author}
      Books.push(book);

      return res.status(201).json({message: `Book for created successfully! id:${id}`});
})


router.patch("/:id", (req, res)=>{
      const id =parseInt(req.params.id);

      if(isNaN(id)){
            return res.status(404).json({error: `id must me a number`});
      }
      const book = Books.find((b) => b.id === id);

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

router.delete("/:id", (req,res)=>{
      const id = parseInt(req.params.id);
      
      if(isNaN(id)){
            return res.status(404).json({error: `id must be a number`});
            
      }
      const index = Books.find((i)=> i.id === id)

      if(!index || index === -1){
            return res.status(404).json({error: `Book with ID of ${id} not found`});
      }

      //Delete the book 
      Books.splice(index, 1);

      return res.status(200).json({message: `Book was deleted successfully!`});
})

//default export
module.exports = router;