
const express = require("express");
const router = express.Router();

const usercontroller = require("../controller/usercontroller");

router.route("/").get(usercontroller.getAllUsers).post(usercontroller.addUser);

router
  .route("/:id")
  .get(usercontroller.getUser)
  .delete(usercontroller.deleteUser)
  .patch(usercontroller.updateUser);

module.exports = router;
