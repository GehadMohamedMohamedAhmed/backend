
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userModel=require("./models/userModel");
const bookModels=require("./models/bookModels");

const bookRouter = require("./routes.js/bookRoutes");
const userRouter = require("./routes.js/userRoutes");

const bookcontroller = require("./controller/bookcontroller");
const usercontroller = require("./controller/usercontroller");

dotenv.config();
const app = express();

mongoose
  .connect('66b5d1f68786c7c9b0228fb5')
  .then(() => console.log("Connected to the DB"));

// const book1 = new Book({ title: "book1", price: 100, author: "Ammar" });
// const book3 = new Book({ price: -100, author: "Ammar" });
// book3
//   .save()
//   .then(() => console.log("Book saved"))
//   .catch((err) => console.log(err));

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

const port = process.env.PORT || 3567;
app.listen(port, () => {
  console.log("Server running on port 4444");
});
