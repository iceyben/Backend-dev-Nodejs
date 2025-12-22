const express = require("express");
const router = express.Router();
const controller = require("../controller/books.controller")

const Books = require("../models/books")


router.get("/",controller.getAllBooks);

router.get("/:id", controller.getBooksById);

router.post("/", controller.createBook);


router.patch("/:id", controller.updateBook)

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