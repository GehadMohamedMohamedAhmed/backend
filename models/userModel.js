const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "user must have a title"],
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  author: String,
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;