
const express = require("express");
const router = express.Router();

const bookcontroller = require("../controller/bookontroller");

const validateBook = (req, res, next) => {
  if (!req.body.title || !req.body.author || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "title, author and price are required!",
    });
  }

  next();
};

router
  .route("/")
  .get(bookcontroller.getAllBooks)
  .post(validateBook, bookcontroller.addBook);

router
  .route("/:id")
  .get(bookcontroller.getBook)
  .delete(bookcontroller.deleteBook)
  .patch(validateBook, bookcontroller.updateBook);

module.exports = router;
