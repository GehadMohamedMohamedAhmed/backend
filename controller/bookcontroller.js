const bookcontroller= express.bookcontroller();
const books = [
    { id: 1, title: "book 1", author: "Ammar", price: 100 },
    { id: 2, title: "book 2", author: "Omar", price: 200 },
    { id: 3, title: "book 3", author: "Ammar", price: 300 },
    { id: 4, title: "book 4", author: "Ahmed", price: 400 },
    { id: 5, title: "book 5", author: "Ammar", price: 500 },
  ];
  
  const Book = require("../models/bookModels");
  
  exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
  
      res.status(200).json({
        status: "success",
        data: books,
      });
    } catch (err) {
      res.status(404).json({
        status: "error",
        message: err.message,
      });
    }
  };
  
  exports.getBook = async (req, res) => {
    try {
      const id = req.params.id;
  
      // const book = books.find((book) => book.id === +id);
      // const book = Book.find({_id: id})
      const book = await Book.findById(id);
  
      if (!book) {
        return res.status(404).json({
          status: "fail",
          message: "Book not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: book,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
  };
  
  exports.addBook = (req, res) => {
    const book = req.body;
  
    books.push(book);
  
    res.status(201).json({
      status: "success",
      data: books,
    });
  };
  
  exports.deleteBook = (req, res) => {
    const id = req.params.id;
  
    const book = books.find((book) => book.id === +id);
  
    if (!book) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }
  
    const index = books.indexOf(book);
    books.splice(index, 1);
  
    res.status(200).json({
      status: "success",
      message: "Book deleted successfully",
    });
  };
  
  exports.updateBook = (req, res) => {
    const id = req.params.id;
    const updates = req.body;
  
    const book = books.find((book) => book.id === +id);
  
    if (!book) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }
  
    book.title = updates.title;
    book.author = updates.author;
  
    res.status(200).json({
      status: "success",
      data: books,
    });
  };
  module.exports=bookcontroller;